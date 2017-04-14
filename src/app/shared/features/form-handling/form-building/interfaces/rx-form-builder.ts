import { FormWithValidation } from '../../shared';
import { IFormControlBuilder, IFormWatchingBuilder } from '.';
import { FormValidationService } from '../../form-validation';

export interface IRxFormBuilder {
  startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder;
  withControl(controlName: string): IFormControlBuilder;
  buildForm(): FormWithValidation;
  withFormValidationWatcher(): IFormWatchingBuilder;
}
