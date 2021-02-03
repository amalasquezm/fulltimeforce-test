import { Component, Input, OnInit } from '@angular/core';
import { GithubCommit } from '../../models/github-commit.model';

@Component({
  selector: 'github-commit-thumbnail',
  templateUrl: './github-commit-thumbnail.component.html',
  styleUrls: ['./github-commit-thumbnail.component.scss']
})
export class GithubCommitThumbnailComponent implements OnInit {
  @Input() githubCommit: GithubCommit | null = {} as GithubCommit;
  constructor() { }

  ngOnInit() {
  }

}
