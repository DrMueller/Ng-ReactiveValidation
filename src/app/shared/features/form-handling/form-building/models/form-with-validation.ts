import { FormGroup } from '@angular/forms';

import { ControlValidationErrorContainer, ValidationError, FormValidationErrorContainer } from '../../form-validation';

export class FormWithValidation {
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
