import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModelFormComponent } from './model-form/model-form.component';
import { ModelForm2Component } from './model-form2/model-form2.component';





@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    ModelForm2Component
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
