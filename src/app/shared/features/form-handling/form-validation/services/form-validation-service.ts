import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationHandler } from './handlers';
import { FormValidationErrorContainer, ValidationControlErrorsMap } from '../models';
import { ValidationCallback } from '../types';

@Injectable()
export class FormValidationService {
  constructor(private formValidationHandler: FormValidationHandler) { }

  public initialize(controlErrorsMaps: ValidationControlErrorsMap[]): void {
    this.formValidationHandler.initialize(controlErrorsMaps);
  }

  public validate(formGroup: FormGroup): FormValidationErrorContainer {
    return this.formValidationHandler.validate(formGroup);
  }
}
