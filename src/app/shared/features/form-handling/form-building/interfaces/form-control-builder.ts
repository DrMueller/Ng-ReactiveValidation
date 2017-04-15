import { ValidatorFn } from '@angular/forms';

import { IRxFormBuilder, IValidationKeyErrorMapBuilder } from '.';

export interface IFormControlBuilder {
  buildControl(): IRxFormBuilder;
  withDefaultValue(value: any): IFormControlBuilder;
  withValidation(validatorFn: ValidatorFn): IValidationKeyErrorMapBuilder;
}
