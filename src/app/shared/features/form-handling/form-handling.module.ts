import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService, FormValidationHandler } from './form-validation';
import { RxFormBuilder } from './form-building';
import { ValidatorFactoryService } from './validators';
import { OpaqueTokens } from './validators/infrastructure';
import { ValidatorProviderFactory } from './validators/provisioning';

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
    FormValidationHandler,
    ValidatorFactoryService
  ],
  declarations: [
    FormValidationErrorDisplayComponent,
    FormControlComponent
  ]
})

export class FormHandlingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormHandlingModule,
      providers: [
        ValidatorProviderFactory.create(),
        RxFormBuilder,
        FormValidationService,
        FormValidationHandler,
        ValidatorFactoryService
      ]
    };
  }
}
