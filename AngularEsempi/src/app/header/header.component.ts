import { Component, OnInit, AfterViewInit, AfterContentInit, Input, ContentChild,  } from '@angular/core';
import {UserService} from '../user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterContentInit {
   login: boolean;
   logout: boolean;
   @Input() logged: boolean;
   @ContentChild(LoginComponent) loginContentChild: LoginComponent;
  constructor(private user: UserService) {


  }

  ngAfterViewInit() {

    this.login = this.user.isLoggedIn();
    this.login = this.logged;

  }
  ngOnInit() {
     this.login = this.user.isLoggedIn();
     this.login = this.logged;

  }

  ngAfterContentInit() {

    this.login = this.user.isLoggedIn();
    this.login = this.logged;

  }

  setLogIn(log: boolean) {

    this.login = log;
    this.login = this.logged;
  }
  setLogOut(log: boolean) {

    this.logout = log;
    this.login = this.logged;
  }

}
