import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';






@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TemplateFormComponent,
    TemplateForm2Component
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
