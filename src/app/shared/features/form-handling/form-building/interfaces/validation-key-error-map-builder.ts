import { IFormControlBuilder } from '.';

export interface IValidationKeyErrorMapBuilder {
  buildValidationKeyErrorMap(): IFormControlBuilder;
  withErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder;
  withValidationKey(validationKey: string): IValidationKeyErrorMapBuilder;
}
