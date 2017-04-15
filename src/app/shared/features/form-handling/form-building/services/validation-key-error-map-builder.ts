import { ValidatorFn } from '@angular/forms';

import { IValidationKeyErrorMapBuilder, IFormControlBuilder } from '../interfaces';
import { ValidationError, ValidationKeyErrorMap } from '../../form-validation';

export class ValidationKeyErrorMapBuilder implements IValidationKeyErrorMapBuilder {
  private readonly keyErrorMap: ValidationKeyErrorMap;

  constructor(private keyErrorMaps: ValidationKeyErrorMap[], private formControlBuilder: IFormControlBuilder) {
    this.keyErrorMap = new ValidationKeyErrorMap();
  }

  public withErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder {
    this.keyErrorMap.validationError = new ValidationError(errorMessage);
    return this;
  }

  public withValidationKey(validationKey: string): IValidationKeyErrorMapBuilder {
    this.keyErrorMap.validationKey = validationKey;
    return this;
  }

  public buildValidationKeyErrorMap(): IFormControlBuilder {
    this.keyErrorMaps.push(this.keyErrorMap);
    return this.formControlBuilder;
  }
}
