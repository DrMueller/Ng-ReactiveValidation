import { FormGroup } from '@angular/forms';
import { ValidatedControl } from '..';

export interface IFormWithValidation {
  formGroup: FormGroup;
  getValidatedControl(controlName: string): ValidatedControl;
}
