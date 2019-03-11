import { Component, OnInit,  } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   login: boolean;
   logout: boolean;

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
