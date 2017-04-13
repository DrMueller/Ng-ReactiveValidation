import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationHandler } from './handlers';
import { IFormWithValidation, ValidationAffiliation } from '../../form-building';
import {  FormValidationErrorContainer } from '../models';

@Injectable()
export class FormValidationService {
  constructor(private formValidationHandler: FormValidationHandler) { }

  public validate(formGroup: FormGroup): FormValidationErrorContainer {
    return this.formValidationHandler.validate(formGroup);
  }

  public initialize(validationAffiliations: ValidationAffiliation[]): void {
    this.formValidationHandler.initialize(validationAffiliations);
  }
}

