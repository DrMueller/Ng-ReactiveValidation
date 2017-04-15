import * as services from '../factories';

export class KeyNames {
  public static minLength = 'minlenght';
  public static maxLength = 'maxlength';
  public static required = 'required';
  public static stringMissmatch = services.StringValidatorFactory.ErrorKey;
}
