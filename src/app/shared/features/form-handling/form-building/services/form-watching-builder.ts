import { FormGroup } from '@angular/forms';

import { IFormWatchingBuilder, IFormBuildingService, IFormWithValidation } from '../interfaces';
import { FormValidationService } from '../../form-validation';

export class FormWatchingBuilder implements IFormWatchingBuilder {
  private debounceMilliseconds = 0;

  constructor(
    private formWithValidation: IFormWithValidation,
    private formValidationService: FormValidationService,
    private formBuildingService: IFormBuildingService) {
  }

  withDebcounceTime(debounceMilliseconds: number): IFormWatchingBuilder {
    this.debounceMilliseconds = debounceMilliseconds;
    return this;
  }

  buildFormWatcher(): IFormBuildingService {
    this.formWithValidation.formGroup.valueChanges.debounceTime(this.debounceMilliseconds).subscribe(() => {
      this.formWithValidation.formValidationErrorContainer = this.formValidationService.validate(this.formWithValidation.formGroup);
    });

    return this.formBuildingService;
  }
}
