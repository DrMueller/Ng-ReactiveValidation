import { OpaqueTokens } from '../infrastructure';
import { MinLengthValidator } from '../services/validator-implementations';

export class ValidatorProvider {
  public provide = OpaqueTokens.APP_VALIDATOR_TOKEN;
  public multi = true;

  public static create(useClass: any): ValidatorProvider {
    return new ValidatorProvider(useClass);
  }

  constructor(public useClass: any) {
  }
}
