import { BrowserModule } from '@angular/platform-browser';
// Zaimportowany schemat dla Custom Elements
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // informacja o używaniu zewnętrznych Web Componentów w module
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
