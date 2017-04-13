import { ValidatorFn } from '@angular/forms';

import { IValidationSetBuilder, IFormControlBuilder } from '../interfaces';
import { ValidationError } from '../../form-validation';
import { ValidationSet } from '../models';

export class ValidationSetBuilder implements IValidationSetBuilder {
  private readonly validationSet: ValidationSet;

  constructor(private validationSets: ValidationSet[], private formControlBuilder: IFormControlBuilder) {
    this.validationSet = new ValidationSet();
  }

  public withErrorMessage(errorMessage: string): IValidationSetBuilder {
    this.validationSet.validationError = new ValidationError(errorMessage);
    return this;
  }

  public withValidationKey(validationKey: string): IValidationSetBuilder {
    this.validationSet.validationKey = validationKey;
    return this;
  }

  public buildValidationSet(): IFormControlBuilder {
    this.validationSets.push(this.validationSet);
    return this.formControlBuilder;
  }
}
