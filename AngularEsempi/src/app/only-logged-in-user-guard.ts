import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { } from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {
     val: boolean;
    constructor(private userService: UserService, private route: Router) {

        this.userService.logChange.subscribe((value) => {
            this.val = value; console.log('logChange' + this.val);
        });
     }

    canActivate() {

        if (this.val) {

            return true;
        } else {
            return this.userService.isLoggedIn().pipe(map(res => {
                if (res.status) {
                    this.userService.setLogIn(true);
                } else {
                    window.alert('Per accedere in questa pagina è necessario loggarsi');
                    this.route.navigate(['/login']);

                    return false;
                }


            }));

        }
    }
}
