import {CanActivate} from '@angular/router';
export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
        console.log('AlwayAuthGuard');
        return true;
    }
}
