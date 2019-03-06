import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, AfterContentInit {

  login: boolean;

 constructor(private user: UserService) {
  this.login = false;

 }
ngAfterContentInit() {
  this.login = this.user.isLoggedIn();
}

 ngAfterViewInit() {
   this.login = this.user.isLoggedIn();

 }
 ngOnInit() {
    this.login = this.user.isLoggedIn();

 }
 setLogIn(log: boolean) {
   this.login = log;
   this.user.logIn(log);
 }


}
