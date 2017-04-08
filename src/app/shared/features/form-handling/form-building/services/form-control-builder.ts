import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '.';
import { IFormControlBuilder, IFormBuilderService } from '../interfaces';

export class FormControlBuilder implements IFormControlBuilder {
  private defaultValue: any;

  constructor(private controlName: string, private formGroup: FormGroup, private formBuilder: IFormBuilderService) {
  }

  public buildControl(): IFormBuilderService {
    const formControl = new FormControl();

    if (this.defaultValue) {
      formControl.setValue(this.defaultValue, {
        onlySelf: true
      });
    }

    formControl.setValidators([Validators.required, Validators.minLength(2)]);

    this.formGroup.addControl(this.controlName, formControl);
    return this.formBuilder;
  }

  public withDefaultValue(defaultValue: any): IFormControlBuilder {
    this.defaultValue = defaultValue;
    return this;
  }
}
