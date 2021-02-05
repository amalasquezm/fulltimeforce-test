import { Component, OnInit } from '@angular/core';
import { GithubSearchOptions } from '../shared/models/';
import { GithubCommitService } from '../shared/services/';

@Component({
  selector: 'github-commit-history',
  templateUrl: './github-commit-history.component.html',
  styleUrls: ['./github-commit-history.component.scss']
})
export class GithubCommitHistoryComponent implements OnInit {
  commitHistory$ = this.githubCommitService.commitHistory$;
  commitHistoryLoading$ = this.githubCommitService.commitHistoryLoading$  ;

  constructor(
    private githubCommitService: GithubCommitService
  ) { }

  ngOnInit() {
  }

  search(githubSearchOptions: GithubSearchOptions): void {
    this.githubCommitService.getCommitHistory(githubSearchOptions);
  }

}
