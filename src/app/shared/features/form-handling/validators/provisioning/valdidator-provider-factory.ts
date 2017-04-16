import { OpaqueToken } from '@angular/core';

import { ValidatorProvider } from '.';
import * as v from '../services/validator-implementations';

export class ValidatorProviderFactory {
  public static APP_VALIDATOR_TOKEN = new OpaqueToken('app_validator');

  public static create(): ValidatorProvider[] {
    const result = [
      ValidatorProvider.create(v.MinLengthValidator),
      ValidatorProvider.create(v.StringMatchValidator)
    ];

    return result;
  }
}
