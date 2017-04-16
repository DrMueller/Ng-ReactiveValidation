import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

import {
  RxFormBuilder,
  FormWithValidation,
  FormValidationService,
  ValidatorFactoryService
} from '../../shared/features/form-handling';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  public form: FormWithValidation;

  constructor(
    private rxFormBuilder: RxFormBuilder,
    private formValidationService: FormValidationService,
    private validatoryFactory: ValidatorFactoryService) {
  }

  private buildForm(): void {
    this.form = this.rxFormBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('nameIdentifierControl')
      .withDefaultValue('test12345')
      .withValidation(this.validatoryFactory.minLenght(50))
      .withCustomErrorMessage('Min Length custom error message')
      .buildValidationKeyErrorMap()
      .withValidation(this.validatoryFactory.stringMatch('test1234'))
      .buildValidationKeyErrorMap()
      .buildControl()
      .withFormValidationWatcher()
      .withDebcounceTime(1000)
      .buildFormWatcher()
      .buildForm();
  }

  ngOnInit() {
    this.buildForm();
  }
}
