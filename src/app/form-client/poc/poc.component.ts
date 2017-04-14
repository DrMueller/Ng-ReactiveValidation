import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IFormWithValidation, FormBuildingService } from '../../shared/features/form-handling/form-building';
import { FormValidationService } from '../../shared/features/form-handling/form-validation';
import { StringValidatorFactory, KeyNames } from '../../shared/features/form-handling/validators';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  public form: IFormWithValidation;

  constructor(private formBuildingService: FormBuildingService, private formValidationService: FormValidationService
  ) {
  }

  private buildForm(): void {
    this.form = this.formBuildingService.startBuildingFormGroup(this.formValidationService)
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
      .withDefaultValue(Date.now().toLocaleString())
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
