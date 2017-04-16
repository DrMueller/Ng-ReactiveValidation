import { ValidatorFn } from '@angular/forms';

import { IRxFormBuilder, IValidationKeyErrorMapBuilder } from '.';
import { IValidator } from '../../validators';

export interface IFormControlBuilder {
  buildControl(): IRxFormBuilder;
  withDefaultValue(value: any): IFormControlBuilder;
  withValidation(validator: IValidator): IValidationKeyErrorMapBuilder;
}
