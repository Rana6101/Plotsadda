import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private _authService:AuthServiceService){};
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._authService.isLoggedIn()) {
        console.log('in guard')
        return true;
      } else {
        // Redirect to login page and store the original URL for redirection after login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
      }
    }
  
}
