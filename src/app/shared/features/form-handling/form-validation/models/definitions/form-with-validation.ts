import { FormGroup } from '@angular/forms';
import { ControlValidationErrorContainer } from '..';

export interface IFormWithValidation {
  formGroup: FormGroup;
  getControlErrorContainer(controlName: string): ControlValidationErrorContainer;
}
