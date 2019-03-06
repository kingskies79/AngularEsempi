import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  userName: FormControl;
  password: FormControl;
  @Output() loggedIn = new EventEmitter <boolean>();

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();

  }
createFormControl() {
  this.userName = new FormControl('', Validators.minLength(5));
  this.password = new FormControl('', Validators.minLength(8));
}
createForm() {
  this.myform = new FormGroup({
    userName: this.userName,
    password: this.password
  });

}
logIn(userName: string, password: string) {
  this.userService.logIn(true);
  this.loggedIn.emit(true);
  this.route.navigate(['/home']);



}

}
