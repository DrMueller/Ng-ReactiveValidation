import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { FormBuildingService, ValidationSetBuilder } from '.';
import { IFormControlBuilder, IFormBuildingService, IValidationSetBuilder } from '../interfaces';
import { ValidationRule, FormValidationService, ControlValidationErrorContainer } from '../../form-validation';
import { ValidationSet, ValidationAffiliation } from '../models';

export class FormControlBuilder implements IFormControlBuilder {

  private validationSets: ValidationSet[] = [];
  private validatorFns: ValidatorFn[] = [];
  private defaultValue: any = null;

  constructor(
    private controlName: string,
    private validationAffiliations: ValidationAffiliation[],
    private formGroup: FormGroup,
    private formBuilder: IFormBuildingService) {
  }

  public buildControl(): IFormBuildingService {
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
    const validationRuleBuilder = new ValidationSetBuilder(this.validationSets, this);
    return validationRuleBuilder;
  }

  private createAndPushValidationAffiliation() {
    const va = new ValidationAffiliation(
      this.controlName,
      this.validationSets);
    this.validationAffiliations.push(va);
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
