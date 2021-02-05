/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { filter } from 'rxjs/operators';
import { GithubCommit, GithubCommitResponse } from '../../models';
import { GithubCommitService } from './github-commit.service';

describe('Service: GithubCommit', () => {
  let githubCommitService: GithubCommitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GithubCommitService
      ]
    });

    githubCommitService = TestBed.inject<GithubCommitService>(GithubCommitService);
    httpMock = TestBed.inject<HttpTestingController>(HttpTestingController);
  });

  describe('getCommitHistory', () => {
    it('should call backend API and return commit history', () => {
      const expectedGithubCommits: GithubCommit[] = [{
        authorName: 'someAutorName',
        authorEmail: 'someAutorEmail',
        date: 'someAutorDate',
        message: 'someMessage',
        avatarURL: 'someAvatar',
        htmlURL: 'someHtmlUrl'
      }];
      spyOn(githubCommitService, 'convertGithubCommitResponseToGithubCommit').and.returnValue(expectedGithubCommits)

      githubCommitService.getCommitHistory({ username: 'name', repository: 'repo'});

      githubCommitService.commitHistory$
        .pipe(
          filter(data => !!data)
        )
        .subscribe(response => {
          expect(response).toEqual(expectedGithubCommits);
          expect(githubCommitService.convertGithubCommitResponseToGithubCommit).toHaveBeenCalled();
        });

      httpMock.match({
        url: 'http://localhost:3000/v1/github-commits?user=name&repository=repo',
        method: 'GET'
      })[0].flush({});

      httpMock.verify();
    });
  });

  describe('convertGithubCommitResponseToGithubCommit', () => {
    it('should return converted GithubCommit response', () => {
      const githubCommitResponses: GithubCommitResponse[] = [{
        sha: 'someSha',
        commit: {
          author: {
            name: 'someAutorName',
            email: 'someAutorEmail',
            date: 'someAutorDate'
          },
          commiter: {
            name: 'someName',
            email: 'someEmail',
            date: 'someDate'
          },
          message: 'someMessage'
        },
        html_url: 'someHtmlUrl',
        author: {
          login: 'someLogin',
          id: 'someId',
          node_id: 'someNode',
          avatar_url: 'someAvatar',
          url: 'someUrl',
          html_url: 'someAutorHtmlUrl'
        },
        committer: {
          login: 'someLogin',
          id: 'someId',
          node_id: 'someNode',
          avatar_url: 'someAvatar',
          url: 'someUrl',
          html_url: 'someCommiterHtmlUrl'
        }
      }];

      const expectedGithubCommits: GithubCommit[] = [{
        authorName: 'someAutorName',
        authorEmail: 'someAutorEmail',
        date: 'someAutorDate',
        message: 'someMessage',
        avatarURL: 'someAvatar',
        htmlURL: 'someHtmlUrl'
      }];

      const result = githubCommitService.convertGithubCommitResponseToGithubCommit(githubCommitResponses);

      expect(result).toEqual(expectedGithubCommits);
    });
  });
});
