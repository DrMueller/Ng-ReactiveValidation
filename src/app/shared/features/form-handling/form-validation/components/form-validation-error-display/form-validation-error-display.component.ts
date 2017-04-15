import { Component, OnInit, Input } from '@angular/core';

import { ControlValidationErrorContainer } from '../../models';

@Component({
  selector: 'app-form-validation-error-display',
  templateUrl: './form-validation-error-display.component.html',
  styleUrls: ['./form-validation-error-display.component.scss']
})
export class FormValidationErrorDisplayComponent implements OnInit {
  @Input() public errorContainer: ControlValidationErrorContainer;

  constructor() { }

  ngOnInit() {
  }
}
