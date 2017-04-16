import { ValidatorProvider } from '.';
import * as v from '../services/validator-implementations';

export class ValidatorProviderFactory {
  public static create(): ValidatorProvider[] {
    const result = [
      ValidatorProvider.create(v.MinLengthValidator),
      ValidatorProvider.create(v.StringMatchValidator)
    ];

    return result;
  }
}
