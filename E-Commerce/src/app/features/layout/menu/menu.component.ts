import { AccountService } from 'src/app/features/account/services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged$: Subject<boolean>;
  control: FormControl = new FormControl('');
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.isLogged$ = this.accountService.isLogged$();
  }


}
