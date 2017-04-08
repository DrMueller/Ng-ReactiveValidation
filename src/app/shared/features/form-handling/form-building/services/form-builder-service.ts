import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { IFormBuilderService, IFormControlBuilder } from '../interfaces';
import { IFormWithValidation } from '../interfaces';
import { FormControlBuilder } from '.';

@Injectable()
export class FormBuilderService implements IFormBuilderService {

  private formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  public startBuildingFormGroup(): IFormBuilderService {
    this.formGroup = this.formBuilder.group({});
    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.formGroup, this);
    return formControlBuilder;
  }

  public buildForm(): IFormWithValidation {
    return {
      formGroup: this.formGroup
    };
  }
}
