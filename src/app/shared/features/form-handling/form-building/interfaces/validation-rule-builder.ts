import { IFormControlBuilder } from '.';

export interface IValidationSetBuilder {
  withErrorMessage(errorMessage: string): IValidationSetBuilder;
  withValidationKey(validationKey: string): IValidationSetBuilder;
  buildValidationSet(): IFormControlBuilder;
}
