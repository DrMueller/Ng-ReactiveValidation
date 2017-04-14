import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { FormValidationService } from '../../form-validation';
import { ValidationAffiliation } from '../../form-building';
import { FormWithValidation } from '../models';
import { IRxFormBuilder, IFormControlBuilder, IFormWatchingBuilder } from '../interfaces';
import { FormControlBuilder, FormWatchingBuilder } from '.';

@Injectable()
export class RxFormBuilder implements IRxFormBuilder {
  private formWithValidation: FormWithValidation;
  private formValidationService: FormValidationService;
  private validationAffiliations: ValidationAffiliation[];

  constructor(private formBuilder: FormBuilder) {
  }

  public startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder {
    this.formValidationService = formValidationService;
    this.validationAffiliations = [];

    this.formWithValidation = new FormWithValidation(this.formBuilder.group({}));

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.validationAffiliations, this.formWithValidation.formGroup, this);
    return formControlBuilder;
  }

  public buildForm(): FormWithValidation {
    this.formValidationService.initialize(this.validationAffiliations);
    return this.formWithValidation;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder {
    const formWatchingBuilder = new FormWatchingBuilder(this.formWithValidation, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
