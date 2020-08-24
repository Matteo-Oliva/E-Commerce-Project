import { ListComponent } from './features/products/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './features/account/login/login.component';
import { RegistrationComponent } from './features/account/registration/registration.component';

const routes: Routes = [

  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: '**', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
