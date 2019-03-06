import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';


@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {
    constructor(private userService: UserService, private route: Router) { }

    canActivate() {
        if (this.userService.isLoggedIn()) {
            return true;
        } else {
            window.alert('Per accedere in questa pagina è necessario loggarsi');
            this.route.navigate(['/login']);
            return false;
        }
    }
}
