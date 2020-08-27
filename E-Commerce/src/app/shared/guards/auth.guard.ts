import { AccountService } from 'src/app/features/account/services/account.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private logged = false;
	private logged$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private accountService: AccountService
    
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.accountService.userValue;
    if (user) {
      this.logged$.next( true );
			this.logged = true;
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    this.logged$.next( false );
			this.logged = false;
    return false;
}
}

