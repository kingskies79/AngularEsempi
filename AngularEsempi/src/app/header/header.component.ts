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
      console.log('constructor Header ' + value);
    });
  }

  ngOnInit() {

  }

  setLogOut(log: boolean) {
    this.user.logIn(log);
  }

}
