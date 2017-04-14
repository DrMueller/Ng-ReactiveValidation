import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { ValidationKeyErrorMap, ValidationControlErrorsMap } from '../../form-validation';
import { IFormControlBuilder, IRxFormBuilder, IValidationSetBuilder } from '../interfaces';
import { RxFormBuilder, ValidationSetBuilder } from '.';

export class FormControlBuilder implements IFormControlBuilder {
  private validationErrorKeyMaps: ValidationKeyErrorMap[] = [];
  private validatorFns: ValidatorFn[] = [];
  private defaultValue: any = null;

  constructor(
    private controlName: string,
    private controlErrorsMaps: ValidationControlErrorsMap[],
    private formGroup: FormGroup,
    private formBuilder: RxFormBuilder) {
  }

  public buildControl(): IRxFormBuilder {
    this.createAndAddFormControl();
    this.createAndPushValidationAffiliation();
    return this.formBuilder;
  }

  public withDefaultValue(defaultValue: any): IFormControlBuilder {
    this.defaultValue = defaultValue;
    return this;
  }

  public withValidation(validatorFn: ValidatorFn): IValidationSetBuilder {
    this.validatorFns.push(validatorFn);
    const validationRuleBuilder = new ValidationSetBuilder(this.validationErrorKeyMaps, this);
    return validationRuleBuilder;
  }

  private createAndPushValidationAffiliation() {
    const va = new ValidationControlErrorsMap(
      this.controlName,
      this.validationErrorKeyMaps);

    this.controlErrorsMaps.push(va);
  }

  private createAndAddFormControl() {
    const formControl = new FormControl();

    formControl.setValue(this.defaultValue, {
      onlySelf: true
    });

    formControl.setValidators(this.validatorFns);
    this.formGroup.addControl(this.controlName, formControl);
  }
}
