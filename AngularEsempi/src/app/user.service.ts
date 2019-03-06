import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private log: boolean;
constructor() {
this.log = false;
}

  isLoggedIn(): boolean {
      return this.log;
  }

  logIn(log: boolean) {
    console.log('userService.logIn' + this.log);
    this.log = log;
  }


}
