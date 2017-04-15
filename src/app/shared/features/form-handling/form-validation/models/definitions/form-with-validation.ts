import { FormGroup } from '@angular/forms';

import { ControlValidationErrorContainer, ValidationError, FormValidationErrorContainer } from '../';

// Asset from the form-building workflow, handles the incoming errors and passes it to the component
// Also holds the formGroup in order to only have to manage one object per component for validation and form-handling

// TODO: Should have 2 Interfaces
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
