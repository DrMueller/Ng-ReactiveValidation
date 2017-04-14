import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationHandler } from './handlers';
import { FormValidationErrorContainer, ValidationControlErrorsMap } from '../models';

@Injectable()
export class FormValidationService {
  constructor(private formValidationHandler: FormValidationHandler) { }

  public validate(formGroup: FormGroup): FormValidationErrorContainer {
    return this.formValidationHandler.validate(formGroup);
  }

  public initialize(controlErrorsMaps: ValidationControlErrorsMap[]): void {
    this.formValidationHandler.initialize(controlErrorsMaps);
  }
}

