import { IFormBuilderService } from '.';

export interface IFormControlBuilder {
  buildControl(): IFormBuilderService;
  withDefaultValue(value: any): IFormControlBuilder;
}
