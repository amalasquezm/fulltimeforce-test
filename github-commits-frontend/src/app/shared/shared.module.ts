import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SERVICES } from './services';
import { HttpClientModule } from '@angular/common/http';

const  MATERIAL = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
];

const MODULES = [
  HttpClientModule,
  CommonModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    
    ReactiveFormsModule,
    ...MATERIAL,
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    FlexLayoutModule,
    ...MATERIAL,
    ...COMPONENTS,
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule { }
