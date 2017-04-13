import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { FormValidationErrorContainer, ValidationError, ControlValidationErrorContainer } from '../..';
import { ValidationAffiliation, ValidationSet } from '../../../form-building';

@Injectable()
export class FormValidationHandler {
  private validationAffiliations: ValidationAffiliation[];

  constructor() { }

  public initialize(validationAffiliations: ValidationAffiliation[]): void {
    this.validationAffiliations = validationAffiliations;
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
      const validationAffiliation = this.validationAffiliations.find(f => f.controlName === controlName);

      if (validationAffiliation) {
        // tslint:disable-next-line:max-line-length
        const validationErrors = validationAffiliation.validationSets.filter(f => controlErorrKeys.some(rk => rk === f.validationKey)).map((v: ValidationSet) => {
          return v.validationError;
        });

        return validationErrors;
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
