import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formRegistration: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegistration = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  get firstName() {
    return this.formRegistration.get('firstName');
  }

  // tslint:disable-next-line: typedef
  get lastName() {
    return this.formRegistration.get('lastName');
  }

  // tslint:disable-next-line: typedef
  get username() {
    return this.formRegistration.get('username');
  }

  // tslint:disable-next-line: typedef
  get password() {
    return this.formRegistration.get('password');
  }

  // tslint:disable-next-line: typedef
  get address() {
    return this.formRegistration.get('address');
  }

  // tslint:disable-next-line: typedef
  get city() {
    return this.formRegistration.get('city');
  }

  // tslint:disable-next-line: typedef
  get state() {
    return this.formRegistration.get('state');
  }

  // tslint:disable-next-line: typedef
  get postalCode() {
    return this.formRegistration.get('postalCode');
  }

}
