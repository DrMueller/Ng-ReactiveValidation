import { IFormControlBuilder, IFormWatchingBuilder } from '.';
import { FormValidationService, IFormWithValidation } from '../../form-validation';

export interface IRxFormBuilder {
  buildForm(): IFormWithValidation;
  startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder;
  withControl(controlName: string): IFormControlBuilder;
  withFormValidationWatcher(): IFormWatchingBuilder;
}
