import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'github-commit-history',
    loadChildren: () => import('./github-commit-history/github-commit-history.module').then(m => m.GithubCommitHistoryModule)
  },
  { path: '', redirectTo: 'github-commit-history', pathMatch: 'full' },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
