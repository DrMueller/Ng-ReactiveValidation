import { ValidatorFn } from '@angular/forms';

export class ValidationRule {
  public errorMessage: string;
  public validationKey: string;
  public validatorFn: ValidatorFn;
}
