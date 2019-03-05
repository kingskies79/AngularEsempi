import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {JsonpModule} from '@angular/http';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
