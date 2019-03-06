import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() loggedOut = new EventEmitter <boolean>();
  constructor(private userService: UserService, private route: Router) {

   }

  ngOnInit() {

  }
  logOut() {

    this.userService.logIn(false);
    this.loggedOut.emit(false);
    this.userService.isLoggedIn();

  }

}
