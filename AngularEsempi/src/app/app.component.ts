import { Component, OnInit, Input } from '@angular/core';
import { delay } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {


 constructor() {


 }

 ngOnInit() {
   // this.login = this.user.isLoggedIn();

 }


}
