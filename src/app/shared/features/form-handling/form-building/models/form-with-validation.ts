import { FormGroup } from '@angular/forms';

import { IFormWithValidation } from '../interfaces';
import { ControlValidationErrorContainer, ValidationError, FormValidationErrorContainer } from '../../form-validation';

export class FormWithValidation implements IFormWithValidation {
  public formValidationErrorContainer: FormValidationErrorContainer = FormValidationErrorContainer.nullObject;

  constructor(private _formGroup: FormGroup) {
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public getControlErrorContainer(controlName: string): ControlValidationErrorContainer {
    return this.formValidationErrorContainer.find(controlName);
  }
}
