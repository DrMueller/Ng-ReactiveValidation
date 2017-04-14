import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import {
  FormValidationErrorContainer,
  ValidationError,
  ControlValidationErrorContainer,
  ValidationControlErrorsMap
} from '../..';

@Injectable()
export class FormValidationHandler {
  private controlErrorsMaps: ValidationControlErrorsMap[];

  constructor() { }

  public initialize(controlErrorsMaps: ValidationControlErrorsMap[]): void {
    this.controlErrorsMaps = controlErrorsMaps;
  }

  public validate(formGroup: FormGroup): FormValidationErrorContainer {
    const controlValidationErrorContainers: ControlValidationErrorContainer[] = [];

    for (const controlName in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(controlName)) {
        const validationErrors = this.getControlValidationErrors(formGroup, controlName);
        if (validationErrors) {
          controlValidationErrorContainers.push(new ControlValidationErrorContainer(controlName, validationErrors));
        }
      }
    }

    const result = new FormValidationErrorContainer(controlValidationErrorContainers);
    return result;
  }

  private getControlValidationErrors(formGroup: FormGroup, controlName: string): ValidationError[] | null {
    const control = formGroup.controls[controlName];
    const controlErorrKeys = this.getControlErrorKeys(control);
    if (controlErorrKeys) {
      const controlErrorsMap = this.controlErrorsMaps.find(f => f.controlName === controlName);
      if (controlErrorsMap) {
        return controlErrorsMap.getValidationErrors(controlErorrKeys);
      }
    }

    return null;
  }

  private getControlErrorKeys(control: AbstractControl): string[] | undefined {
    if ((control.touched || control.dirty) && !control.valid) {
      const controlErrors = Object.keys(control.errors);
      return controlErrors;
    };
  }
}
