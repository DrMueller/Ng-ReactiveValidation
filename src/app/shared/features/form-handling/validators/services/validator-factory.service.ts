import { Injectable, Inject } from '@angular/core';

import { IValidator } from '.';
import { OpaqueTokens } from '../infrastructure';
import * as v from './validator-implementations';

@Injectable()
export class ValidatorFactoryService {
  public minLenght(minLength: number): IValidator {
    return this.getByKey(v.MinLengthValidator.key, minLength);
  }

  public stringMatch(match: string): IValidator {
    return this.getByKey(v.StringMatchValidator.key, match);
  }

  constructor( @Inject(OpaqueTokens.APP_VALIDATOR_TOKEN) private validators: IValidator[]) { }

  public getByKey(key: string, ...funcArgs: any[]): IValidator {
    const result = this.validators.find(f => f.key === key);
    if (!result) {
      throw Error(`Validator with Key ${key} not found.`);
    }

    result.initialize(...funcArgs);
    return result;
  }
}
