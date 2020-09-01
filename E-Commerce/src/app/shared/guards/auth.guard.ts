import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from './../../features/account/services/account.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkIfAuthenticated();
      }

      private checkIfAuthenticated(): boolean | UrlTree {
        if ( this.accountService.isLogged() ) {
          return true;
        }
        alert('You must be logged');
        return this.router.parseUrl( '/account/login' );
      }
}

