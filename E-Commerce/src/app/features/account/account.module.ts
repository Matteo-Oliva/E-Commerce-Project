import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/libraries/material/material.module';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      AccountRoutingModule,
      MaterialModule
    ],
    declarations: [
      LoginComponent,
      RegistrationComponent
    ]
})
export class AccountModule { }
