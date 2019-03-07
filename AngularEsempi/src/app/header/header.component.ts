import { Component, OnInit,  Input, ContentChild,  } from '@angular/core';
import {UserService} from '../user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   login: boolean;
   logout: boolean;
   @Input() logged: boolean;
   @ContentChild(LoginComponent) loginContentChild: LoginComponent;
  constructor(private user: UserService) {
     this.user.logChange.subscribe((value) => {
      this.login = value;
      console.log('constructor Header ' + this.login);
    });
  }

  ngOnInit() {
    this.login = JSON.parse(localStorage.getItem('logIN'));
  }

  setLogOut(log: boolean) {
    this.user.setLogIn(log);
    localStorage.removeItem('logIN');
  }

}
