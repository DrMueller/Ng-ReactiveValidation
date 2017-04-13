import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService, FormValidationHandler } from './form-validation';
import { FormBuildingService } from './form-building';

import { FormValidationErrorDisplayComponent } from './form-validation/components';

@NgModule({
  exports: [
    FormValidationErrorDisplayComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuildingService,
    FormValidationService,
    FormValidationHandler
  ],
  declarations: [FormValidationErrorDisplayComponent]
})

export class FormHandlingModule { }
