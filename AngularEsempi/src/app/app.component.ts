import { Component, OnInit, Input } from '@angular/core';
import { delay } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states: any;

  constructor() {
    this.states = [
      {
        country: 'Italia',
        persone: [
          { name: 'Fabio', age: 30 },
          { name: 'Salvo', age: 40 }
        ]
      },
      {
        country: 'Francia',
        persone: [
          { name: 'Yohann', age: 25 },
          { name: 'Sebastian', age: 50 }
        ]
      }
    ];


  }

  getColor(country) {

    switch (country) {
      case 'Italia':
        return 'green';
      case 'Francia':
        return 'red';
    }
  }

  ngOnInit() {


  }


}
