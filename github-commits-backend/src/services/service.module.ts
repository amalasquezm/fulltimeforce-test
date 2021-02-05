import { HttpModule, Module } from '@nestjs/common';
import { GithubCommitsService } from './api/github-commits/github-commits.service';

@Module({
  imports: [
    HttpModule
  ],
  providers: [
    GithubCommitsService
  ],
  exports: [
    GithubCommitsService
  ]
})
export class ServiceModule {}
