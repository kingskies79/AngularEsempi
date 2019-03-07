import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private log = JSON.parse(localStorage.getItem('logIN') || 'false');
logChange: Subject<boolean> = new Subject<boolean>();
constructor() {
this.log = JSON.parse(localStorage.getItem('logIN'));
}

  isLoggedIn(): boolean {

    return JSON.parse(localStorage.getItem('logIN') || this.log.toString());
  }

  setLogIn(log: boolean) {
    console.log('logIn' + log);
    this.log = log;
    localStorage.setItem('logIN', this.log.toString() );
    this.logChange.next(log);

  }


}
