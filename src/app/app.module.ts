import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FormClientModule } from './form-client';
import { FormHandlingModule } from './shared/features/form-handling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
