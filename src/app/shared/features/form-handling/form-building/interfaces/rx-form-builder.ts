import { IFormControlBuilder, IFormWatchingBuilder } from '.';
import { FormValidationService, FormWithValidation } from '../../form-validation';

export interface IRxFormBuilder {
  startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder;
  withControl(controlName: string): IFormControlBuilder;
  buildForm(): FormWithValidation;
  withFormValidationWatcher(): IFormWatchingBuilder;
}
