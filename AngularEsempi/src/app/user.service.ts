import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { resolve } from 'url';
import { HttpClient } from '@angular/common/http';


interface isLoggedIn {
  status: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
private log = false;
value: boolean;
logChange: Subject<boolean> = new Subject<boolean>();
constructor(private http: HttpClient) {

}

  isLoggedIn(): Observable<isLoggedIn> {
  return this.http.get<isLoggedIn>('http://localhost:80/api/isloggedin.php');


  }

  setLogIn(log: boolean) {
    console.log('logIn' + log);
    this.log = log;
    this.logChange.next(log);

  }


}
