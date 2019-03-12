import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  //encapsulation: ViewEncapsulation.Native // il component viene dissociato dallo stile globale, perderà il modulo bootstrap, userà solo lo stile locale
  //encapsulation: ViewEncapsulation.None //il css presente in questo component influenzerà anche gli altri component
  encapsulation: ViewEncapsulation.Emulated // DEFAULT il css locale sarà usato solo dal componente locale senza perdere il css globale del modulo bootstrap
})
export class JokeFormComponent implements OnInit {
@Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }
addJoke(setup, punchline){
  this.jokeCreated.emit(new Joke(setup, punchline));
}
}
