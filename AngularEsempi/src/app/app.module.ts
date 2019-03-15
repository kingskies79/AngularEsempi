import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';






@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
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
