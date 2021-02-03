/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubCommitService } from './github-commit.service';

describe('Service: GithubCommit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubCommitService]
    });
  });

  it('should ...', inject([GithubCommitService], (service: GithubCommitService) => {
    expect(service).toBeTruthy();
  }));
});
