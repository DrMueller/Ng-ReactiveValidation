import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidationDisplayComponent } from './form-validation';
import { FormBuilderService } from './form-building';

@NgModule({
  exports: [
    ValidationDisplayComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilderService
  ],
  declarations: [ValidationDisplayComponent]
})

export class FormHandlingModule { }
