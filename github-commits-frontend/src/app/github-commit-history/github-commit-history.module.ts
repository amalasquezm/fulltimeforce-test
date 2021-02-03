import { GithubCommitHistoryComponent } from './github-commit-history.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { GithubCommitHistoryRoutesModule } from './github-commit-history.routes.module';

@NgModule({
  imports: [
    SharedModule,
    GithubCommitHistoryRoutesModule
  ],
  declarations: [
    GithubCommitHistoryComponent
  ],
  exports: [
    GithubCommitHistoryComponent
  ]
})
export class GithubCommitHistoryModule {
}
