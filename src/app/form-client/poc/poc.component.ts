import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

import {
  RxFormBuilder,
  FormWithValidation,
  FormValidationService,
  StringValidatorFactory,
  KeyNames
} from '../../shared/features/form-handling';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  public form: FormWithValidation;

  constructor(private rxFormBuilder: RxFormBuilder, private formValidationService: FormValidationService) {
  }

  private buildForm(): void {
    this.form = this.rxFormBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('heightControl')
      .withDefaultValue(185)
      .withValidation(Validators.required)
      .withValidationKey(KeyNames.required)
      .withErrorMessage('tra')
      .buildValidationSet()
      .buildControl()
      .withControl('nameIdentifierControl')
      .withValidation(StringValidatorFactory.create('test1234'))
      .withValidationKey(KeyNames.stringMissmatch)
      .withErrorMessage('Text is NOT test1234')
      .buildValidationSet()
      .withValidation(Validators.maxLength(10))
      .withValidationKey(KeyNames.maxLength)
      .withErrorMessage('Length is too large')
      .buildValidationSet()
      .buildControl()
      .withControl('birthdateControl')
      .withDefaultValue(new Date().toLocaleDateString())
      .buildControl()
      .withControl('newsletterControl')
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
