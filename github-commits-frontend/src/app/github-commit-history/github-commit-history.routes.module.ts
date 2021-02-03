import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubCommitHistoryComponent } from './github-commit-history.component';

const notFoundRoutes: Routes = [{
  path: '',
  component: GithubCommitHistoryComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(notFoundRoutes)],
  exports: [RouterModule]
})
export class GithubCommitHistoryRoutesModule {
}
