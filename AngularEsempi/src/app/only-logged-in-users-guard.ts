import {CanActivate} from '@angular/router';
import {UserService} from './user-service';
import {Injectable} from '@angular/core';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

constructor(private userService: UserService ) {
}
    canActivate() {
        console.log('OnlyLoggedInUsersGuard');
        if (this.userService.isLoggedIn()) {
            return true;
        } else {
            window.alert('You don\'t have permission to view this page');
            return false;
        }
    }
}
