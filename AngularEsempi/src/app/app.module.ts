import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CardHoverDirective } from './card-hover.directive';







@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CardHoverDirective,

  ],
  imports: [
    BrowserModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
