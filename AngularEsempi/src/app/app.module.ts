import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModelFormComponent } from './model-form/model-form.component';





@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
