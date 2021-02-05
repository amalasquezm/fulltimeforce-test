import { Controller, Get, Query } from "@nestjs/common";
import { GetGithubCommitsQueries } from './../../models/queries/get-github-commits-queries.model';
import { GithubCommitsService } from "../../services/api/github-commits/github-commits.service";

@Controller('v1/github-commits')
export class GithubCommitsController {
  constructor(
    private githubCommitsService: GithubCommitsService
  ) { }

  @Get()
  geGithubCommits(
    @Query() queries: GetGithubCommitsQueries
  ) {
    return this.githubCommitsService.getCommits(queries.user, queries.repository);
  }
}
