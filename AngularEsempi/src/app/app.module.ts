import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ObservablePipeComponent } from './observable-pipe/observable-pipe.component';





@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeComponent,
    ObservablePipeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
