import { ValidationError } from '.';

export class ValidationSet {
  public constructor(
    public readonly validationRuleKey: string,
    public readonly validationErrror: ValidationError
  ) { }
}
