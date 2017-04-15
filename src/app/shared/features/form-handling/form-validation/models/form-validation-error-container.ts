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

  public static get nullObject(): FormValidationErrorContainer {
    return new FormValidationErrorContainer([]);
  }
}
