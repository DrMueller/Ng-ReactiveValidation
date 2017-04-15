import { ValidationError } from '.';

// Returns a collection of validation errors within a Control
export class ControlValidationErrorContainer {
  constructor(public controlName: string, public validationErrors: ValidationError[]) {
  }

  public static get nullObject() {
    return new ControlValidationErrorContainer('', []);
  }
}
