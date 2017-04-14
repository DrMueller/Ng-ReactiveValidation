import { ValidatorFn } from '@angular/forms';

import { IRxFormBuilder, IValidationSetBuilder } from '.';

export interface IFormControlBuilder {
  buildControl(): IRxFormBuilder;
  withDefaultValue(value: any): IFormControlBuilder;
  withValidation(validatorFn: ValidatorFn): IValidationSetBuilder;
}
