import { FormGroup } from '@angular/forms';

import { FormWithValidation } from '../../form-validation/models/definitions/implementation';
import { FormValidationService } from '../../form-validation';
import { IFormWatchingBuilder, IRxFormBuilder } from '../interfaces';

export class FormWatchingBuilder implements IFormWatchingBuilder {
  private debounceMilliseconds = 0;

  constructor(
    private formWithValidation: FormWithValidation,
    private formValidationService: FormValidationService,
    private formBuildingService: IRxFormBuilder) {
  }

  withDebcounceTime(debounceMilliseconds: number): IFormWatchingBuilder {
    this.debounceMilliseconds = debounceMilliseconds;
    return this;
  }

  buildFormWatcher(): IRxFormBuilder {
    this.formWithValidation.formGroup.valueChanges.debounceTime(this.debounceMilliseconds).subscribe(() => {
      this.formWithValidation.formValidationErrorContainer = this.formValidationService.validate(this.formWithValidation.formGroup);
    });

    return this.formBuildingService;
  }
}
