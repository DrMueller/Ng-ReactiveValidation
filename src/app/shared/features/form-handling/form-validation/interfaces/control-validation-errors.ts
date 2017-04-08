import { ValidationError } from '../models';

export interface IControlValidationErrors {
  [controlName: string]: ValidationError[] | null;
}
