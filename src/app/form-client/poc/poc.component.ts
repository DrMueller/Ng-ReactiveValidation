import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IFormWithValidation, FormBuilderService } from '../../shared/features/form-handling';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  public form: IFormWithValidation;

  constructor(private formBuilder: FormBuilderService,
  ) {
  }

  private buildForm(): void {
    this.form = this.formBuilder.startBuildingFormGroup()
      .withControl('nameIdentifierControl')
      .withDefaultValue('MatthasMueller123')
      .buildControl()
      .withControl('heightControl')
      .withDefaultValue(185)
      .buildControl()
      .withControl('birthdateControl')
      .withDefaultValue(new Date(1986, 12, 29))
      .buildControl()
      .withControl('newsletterControl')
      .withDefaultValue(true)
      .buildControl()
      .buildForm();

  }

  ngOnInit() {
    this.buildForm();
  }
}
