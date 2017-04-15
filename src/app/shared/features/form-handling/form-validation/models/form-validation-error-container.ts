import { ControlValidationErrorContainer } from '.';

// Returns a collection of validation errors for a Form, grouped by each Control
export class FormValidationErrorContainer {
  public constructor(private controlValidationErrorContainers: ControlValidationErrorContainer[]) {
  }

  public find(controlName: string): ControlValidationErrorContainer {
    const controlValidation = this.controlValidationErrorContainers.find(f => f.controlName === controlName);
    if (controlValidation) {
      return controlValidation;
    }

    return ControlValidationErrorContainer.nullObject;
  }

  public controlHasErrors(controlName: string): boolean {
    const controlErrorContainer = this.find(controlName);
    const result = controlErrorContainer.validationErrors.length > 0;
    return result;
  }

  public static get nullObject(): FormValidationErrorContainer {
    return new FormValidationErrorContainer([]);
  }
}
