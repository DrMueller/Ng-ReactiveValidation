import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PocComponent } from './poc/poc.component';

import { FormHandlingModule } from '../shared/features/form-handling';

@NgModule({
  exports: [
    PocComponent
  ],
  imports: [
    CommonModule,
    FormHandlingModule
  ],
  declarations: [PocComponent]
})
export class FormClientModule { }
