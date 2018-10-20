import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles: string[] = route.data['roles'] || [];
    if (this.authService.isAuthorized(...roles)) {
      return true;
    }

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login'], {
        queryParams: {
          return: state.url
        }
      });
    }
    return false;
  }
}
