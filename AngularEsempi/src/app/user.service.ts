import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private log: boolean;
logChange: Subject<boolean> = new Subject<boolean>();
constructor() {
this.log = false;
}

  isLoggedIn(): boolean {
      console.log('userService.isLoggedIn '  + this.log);
      return this.log;
  }

  logIn(log: boolean) {
    console.log('userService.logIn ' + this.log);
    this.log = log;
    this.logChange.next(this.log);

  }


}
