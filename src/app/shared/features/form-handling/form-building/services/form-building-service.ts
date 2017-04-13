import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { IFormBuildingService, IFormControlBuilder } from '../interfaces';
import { IFormWithValidation, IFormWatchingBuilder } from '../interfaces';
import { FormValidationService } from '../../form-validation';
import { ValidationAffiliation } from '../../form-building';
import { FormControlBuilder, FormWatchingBuilder } from '.';
import { FormWithValidation } from '../models';


@Injectable()
export class FormBuildingService implements IFormBuildingService {
  private formWithValidation: IFormWithValidation;
  private formValidationService: FormValidationService;
  private validationAffiliations: ValidationAffiliation[];

  constructor(private formBuilder: FormBuilder) {
  }

  public startBuildingFormGroup(formValidationService: FormValidationService): IFormBuildingService {
    this.formValidationService = formValidationService;
    this.validationAffiliations = [];

    this.formWithValidation = new FormWithValidation(this.formBuilder.group({}));

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.validationAffiliations, this.formWithValidation.formGroup, this);
    return formControlBuilder;
  }

  public buildForm(): IFormWithValidation {
    this.formValidationService.initialize(this.validationAffiliations);
    return this.formWithValidation;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder {
    const formWatchingBuilder = new FormWatchingBuilder(this.formWithValidation, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
