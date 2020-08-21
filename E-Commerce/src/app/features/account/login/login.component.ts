import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../shared/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password; string;
  loginForm: FormGroup;
  invalidLogin: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.authenticationService.isLogged$().subscribe(result => {
      result ? this.router.navigate(['/']) : this.invalidLogin = true;
    });
  }

  // tslint:disable-next-line: typedef
  login() {
    this.authenticationService.login(this.username, this.password);
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.router.navigate(['/']);
  }

}
