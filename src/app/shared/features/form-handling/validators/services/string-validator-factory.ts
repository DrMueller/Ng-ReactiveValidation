import { ValidatorFn, AbstractControl } from '@angular/forms';

import { IValidatorFunctionResult } from '../interfaces';

export class StringValidatorFactory {

  public static ErrorKey = 'stringmissmatch';

  public static create(check: string): ValidatorFn {
    return (c: AbstractControl): IValidatorFunctionResult => {
      let result: any = null;

      if (c.value !== check) {
        result = {};
        result[this.ErrorKey] = true;
      }

      return result;
    };
  }
}
