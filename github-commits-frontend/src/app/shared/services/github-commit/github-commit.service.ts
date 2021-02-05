import { GithubCommit } from './../../models/github-commit.model';
import { GithubSearchOptions } from './../../models/github-search-options.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GithubCommitResponse } from '../../models/github-commit-response.model';
import { config } from '../../core/config';

@Injectable({
  providedIn: 'root'
})
export class GithubCommitService {
  commitHistory$: BehaviorSubject<GithubCommit[] | null> = new BehaviorSubject<GithubCommit[] | null>(null);
  commitHistoryLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  getCommitHistory(githubSearchOptions: GithubSearchOptions): void {
    this.commitHistoryLoading$.next(true);
    const options = { params: new HttpParams({fromString: `user=${githubSearchOptions.username}&repository=${githubSearchOptions.repository}`}) };

    this.http.get<GithubCommitResponse[]>(`${config.urls.customGithubAPI}/v1/github-commits`, options)
      .pipe(
        tap((commitHistory: GithubCommitResponse[]) => {
          const githubCommits = this.convertGithubCommitResponseToGithubCommit(commitHistory);
          this.commitHistory$.next(githubCommits);
          this.commitHistoryLoading$.next(false);
        })
      ).subscribe();
  }

  convertGithubCommitResponseToGithubCommit(githubCommitResponses: GithubCommitResponse[]): GithubCommit[] {
    const githubCommits = githubCommitResponses.map((githubCommitResponse: GithubCommitResponse) => {
      return {
        authorName: githubCommitResponse.commit.author.name,
        authorEmail: githubCommitResponse.commit.author.email,
        date: githubCommitResponse.commit.author.date,
        message: githubCommitResponse.commit.message,
        avatarURL: githubCommitResponse.author.avatar_url,
        htmlURL: githubCommitResponse.html_url
      };
    });
    
    return githubCommits;
  }
}
