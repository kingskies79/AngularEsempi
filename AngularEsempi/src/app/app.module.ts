import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TemplateFormComponent } from './template-form/template-form.component';






@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TemplateFormComponent
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
