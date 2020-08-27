import { Component } from '@angular/core';

import { AccountService } from './features/account/services/account.service';
import { User } from './shared/model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';

  user: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  // tslint:disable-next-line: typedef
  logout() {
      this.accountService.logout();
  }
}
