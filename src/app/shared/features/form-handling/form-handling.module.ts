import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService, FormValidationHandler } from './form-validation';
import { RxFormBuilder } from './form-building';

import { FormValidationErrorDisplayComponent, FormControlComponent } from './form-validation/components';

@NgModule({
  exports: [
    FormControlComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RxFormBuilder,
    FormValidationService,
    FormValidationHandler
  ],
  declarations: [
    FormValidationErrorDisplayComponent,
    FormControlComponent]
})

export class FormHandlingModule { }
