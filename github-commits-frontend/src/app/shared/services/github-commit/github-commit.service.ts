import { GithubCommit } from './../../models/github-commit.model';
import { GithubSearchOptions } from './../../models/github-search-options.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GithubCommitResponse } from '../../models/github-commit-response.model';

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

    this.http.get<GithubCommitResponse[]>(`https://api.github.com/repos/${githubSearchOptions.username}/${githubSearchOptions.repository}/commits`)
      .pipe(
        tap((commitHistory: GithubCommitResponse[]) => {
          const githubCommits = this.convertGithubCommitResponseToGithubCommit(commitHistory);
          console.log('githubCommits', githubCommits);
          this.commitHistory$.next(githubCommits);
          this.commitHistoryLoading$.next(false);
        })
      ).subscribe();
  }

  convertGithubCommitResponseToGithubCommit(githubCommitResponses: GithubCommitResponse[]): GithubCommit[] {
    console.log('githubCommitResponses', githubCommitResponses);
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
