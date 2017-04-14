import { ValidatorFn } from '@angular/forms';

import { IValidationSetBuilder, IFormControlBuilder } from '../interfaces';
import { ValidationError, ValidationKeyErrorMap } from '../../form-validation';

export class ValidationSetBuilder implements IValidationSetBuilder {
  private readonly keyErrorMap: ValidationKeyErrorMap;

  constructor(private keyErrorMaps: ValidationKeyErrorMap[], private formControlBuilder: IFormControlBuilder) {
    this.keyErrorMap = new ValidationKeyErrorMap();
  }

  public withErrorMessage(errorMessage: string): IValidationSetBuilder {
    this.keyErrorMap.validationError = new ValidationError(errorMessage);
    return this;
  }

  public withValidationKey(validationKey: string): IValidationSetBuilder {
    this.keyErrorMap.validationKey = validationKey;
    return this;
  }

  public buildValidationSet(): IFormControlBuilder {
    this.keyErrorMaps.push(this.keyErrorMap);
    return this.formControlBuilder;
  }
}
