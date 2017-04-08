import { IFormControlBuilder } from '.';
import { IFormWithValidation } from '../../../interfaces';

export interface IFormBuilderService {
  withControl(controlName: string): IFormControlBuilder;
  buildForm(): IFormWithValidation;
}
