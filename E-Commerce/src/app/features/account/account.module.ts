import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './account/layout/layout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegistrationComponent
    ]
})
export class AccountModule { }