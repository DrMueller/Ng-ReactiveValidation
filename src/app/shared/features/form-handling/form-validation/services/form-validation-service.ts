import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationHandler } from './handlers';
import { ValidatedForm, ValidationControlErrorsMap } from '../models';
import { ValidationCallback } from '../types';

@Injectable()
export class FormValidationService {
  constructor(private formValidationHandler: FormValidationHandler) { }

  public initialize(formGroup: FormGroup, controlErrorsMaps: ValidationControlErrorsMap[], validatedForm: ValidatedForm): void {
    this.formValidationHandler.initialize(formGroup, controlErrorsMaps, validatedForm);
  }

  public validate(): void {
    this.formValidationHandler.validate();
  }
}
