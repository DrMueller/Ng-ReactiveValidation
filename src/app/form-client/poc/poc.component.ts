import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IFormWithValidation, FormBuildingService } from '../../shared/features/form-handling/form-building';
import { FormValidationService } from '../../shared/features/form-handling/form-validation';

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
      .withValidationKey('required')
      .withErrorMessage('tra')
      .buildValidationSet()
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
