import { ValidatorFn } from '@angular/forms';

import { IFormBuildingService, IValidationSetBuilder } from '.';

export interface IFormControlBuilder {
  buildControl(): IFormBuildingService;
  withDefaultValue(value: any): IFormControlBuilder;
  withValidation(validatorFn: ValidatorFn): IValidationSetBuilder;
}
