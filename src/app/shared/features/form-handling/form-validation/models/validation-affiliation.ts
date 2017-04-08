import { ValidationSet } from '.';

export class ValidationAffiliation {
  public constructor(
    public readonly controlName: string,
    public readonly validationSets: ValidationSet[]) {
  }
}
