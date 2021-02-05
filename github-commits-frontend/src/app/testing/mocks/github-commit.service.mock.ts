import { Injectable } from '@angular/core';
import { GithubSearchOptions } from './../../shared/models';
import { GithubCommit } from './../../shared/models/github-commit.model';
import { GithubCommitResponse } from './../../shared/models/github-commit-response.model';

@Injectable()
export class GithubCommitServiceMock {
  getCommitHistory(_githubSearchOptions: GithubSearchOptions): void { }

  convertGithubCommitResponseToGithubCommit(_githubCommitResponses: GithubCommitResponse[]): GithubCommit[] {
    return [{}] as GithubCommit[];
  }
}
