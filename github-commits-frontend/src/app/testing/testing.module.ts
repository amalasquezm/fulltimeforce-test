import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubCommitService } from '../shared/services';
import { GithubCommitServiceMock } from './mocks/github-commit.service.mock';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: GithubCommitService, useClass: GithubCommitServiceMock },
  ]
})
export class TestingModule { }
