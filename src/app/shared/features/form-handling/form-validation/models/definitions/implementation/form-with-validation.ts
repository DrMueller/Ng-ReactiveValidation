import { FormGroup } from '@angular/forms';

import { ControlValidationErrorContainer, ValidationError, FormValidationErrorContainer } from '../..';
import { IFormWithValidation } from '..';

// Asset from the form-building workflow, handles the incoming errors and passes it to the component
// Also holds the formGroup in order to only have to manage one object per component for validation and form-handling
export class FormWithValidation implements IFormWithValidation {


  public formValidationErrorContainer: FormValidationErrorContainer = FormValidationErrorContainer.nullObject;

  constructor(private _formGroup: FormGroup) {
  }

  public hasControlValidationErrors(controlName: string): boolean {
    return this.formValidationErrorContainer.controlHasErrors(controlName);
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public getControlErrorContainer(controlName: string): ControlValidationErrorContainer {
    return this.formValidationErrorContainer.find(controlName);
  }
}
