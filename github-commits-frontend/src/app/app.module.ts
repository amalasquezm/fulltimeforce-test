;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubCommitHistoryModule } from './github-commit-history/github-commit-history.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    GithubCommitHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
