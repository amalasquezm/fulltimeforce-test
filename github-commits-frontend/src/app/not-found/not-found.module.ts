import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutesModule } from './not-found.routes.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutesModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
