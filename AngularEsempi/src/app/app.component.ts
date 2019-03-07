import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  login: boolean;

 constructor(private user: UserService) {
  this.login = false;

 }

 ngOnInit() {
   // this.login = this.user.isLoggedIn();

 }
 setLogIn(log: boolean) {
   this.login = log;
   this.user.setLogIn(log);
 }


}
