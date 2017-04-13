import { FormGroup } from '@angular/forms';
import { ControlValidationErrorContainer, FormValidationErrorContainer, ValidationError } from '../../form-validation';

export interface IFormWithValidation {
  formGroup: FormGroup;
  formValidationErrorContainer: FormValidationErrorContainer;
  getControlErrorContainer(controlName: string): ControlValidationErrorContainer;
}
