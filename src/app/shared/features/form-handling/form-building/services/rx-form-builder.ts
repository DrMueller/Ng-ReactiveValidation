import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { FormValidationService, FormWithValidation, ValidationControlErrorsMap } from '../../form-validation';
import { IRxFormBuilder, IFormControlBuilder, IFormWatchingBuilder } from '../interfaces';
import { FormControlBuilder, FormWatchingBuilder } from '.';

@Injectable()
export class RxFormBuilder implements IRxFormBuilder {
  private formWithValidation: FormWithValidation;
  private formValidationService: FormValidationService;
  private controlErrorsMaps: ValidationControlErrorsMap[];

  constructor(private formBuilder: FormBuilder) {
  }

  public startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder {
    this.formValidationService = formValidationService;
    this.controlErrorsMaps = [];

    this.formWithValidation = new FormWithValidation(this.formBuilder.group({}));

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.controlErrorsMaps, this.formWithValidation.formGroup, this);
    return formControlBuilder;
  }

  public buildForm(): FormWithValidation {
    this.formValidationService.initialize(this.controlErrorsMaps);
    return this.formWithValidation;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder {
    const formWatchingBuilder = new FormWatchingBuilder(this.formWithValidation, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
