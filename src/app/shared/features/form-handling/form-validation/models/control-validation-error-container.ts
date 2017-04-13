import { ValidationError } from '.';

export class ControlValidationErrorContainer {
  constructor(public controlName: string, public validationErrors: ValidationError[]) {
  }

  public static get nullObject() {
    return new ControlValidationErrorContainer('', []);
  }
}
