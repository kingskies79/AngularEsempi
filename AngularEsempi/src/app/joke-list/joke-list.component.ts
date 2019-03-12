import { Component, OnInit, ViewChild, AfterViewInit, ContentChildren, ContentChild, AfterContentInit, ElementRef,
  QueryList,
  ViewChildren} from '@angular/core';
import {Joke} from '../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
  @ViewChild(JokeComponent) viewChield: JokeComponent;
  @ViewChild('header') headerEl: ElementRef;
  @ContentChild(JokeComponent) contentChield: JokeComponent;
  @ViewChildren(JokeComponent) viewChildren: QueryList<JokeComponent>;

jokeList: Joke[];
  constructor() {
    this.jokeList = [
      new Joke('Disse la vacca al mulo', 'oggi ti puzza il culo'),
      new Joke('Disse il mulo alla vacca', 'Ho appena fatto la cacca')
    ];
    console.log(this.viewChield);
  }
ngAfterContentInit(){
 console.log(this.contentChield);
}
 ngAfterViewInit(){
  console.log(this.viewChield);
  console.log(this.viewChildren);
  let jokes: JokeComponent[] = this.viewChildren.toArray();
  console.log(jokes);
  this.headerEl.nativeElement.textContent = 'Bel gioco';
 }
addJoke(j) {
  this.jokeList.push(j);
}
}
