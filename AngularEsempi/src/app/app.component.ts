import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
data: any [];

 constructor() {

  this.data = [
    {name: 'boo'},
    {name: 'damn'},
    {name: 'ciao'},
    {name: 'hell'},
    {name: 'hello'}
  ];
 }

 ngOnInit() {
   // this.login = this.user.isLoggedIn();

 }


}
