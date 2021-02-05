import { Module } from '@nestjs/common';
import { GithubCommitsService } from './../services/api/github-commits/github-commits.service';
import { GithubCommitsController } from './github-commits/github-commits.controller';
import { ServiceModule } from '../services/service.module';

@Module({
  imports: [
    ServiceModule
  ],
  controllers: [
    GithubCommitsController
  ]
})
export class ControllersModule {}
