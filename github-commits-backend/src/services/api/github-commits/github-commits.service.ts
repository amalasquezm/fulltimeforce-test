import { config } from './../../../core/config';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubCommitResponse } from '../../../models/responses/github-commit-response.model';
import { AxiosResponse } from 'axios';

@Injectable()
export class GithubCommitsService {
  constructor(
    private httpService: HttpService
  ) {}

  getCommits(user: string, repository: string): Observable<AxiosResponse<GithubCommitResponse>> {
    const url = `${config.urls.githubAPI}/repos/${user}/${repository}/commits`;

    return this.httpService.get(url)
      .pipe(
        map(response => response.data)
      );
  }
}