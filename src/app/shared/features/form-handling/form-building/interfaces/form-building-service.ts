import { IFormControlBuilder, IFormWithValidation, IFormWatchingBuilder } from '.';
import { FormValidationService } from '../../form-validation';

export interface IFormBuildingService {
  withControl(controlName: string): IFormControlBuilder;
  buildForm(): IFormWithValidation;
  withFormValidationWatcher(): IFormWatchingBuilder;
}
