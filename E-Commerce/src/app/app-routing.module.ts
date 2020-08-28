import { HomeComponent } from './features/layout/home/home.component';
import { CartComponent } from './features/basket/cart/cart.component';
import { DetailComponent } from './features/products/detail/detail.component';
import { ListComponent } from './features/products/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/account/login/login.component';
import { RegistrationComponent } from './features/account/registration/registration.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '**',redirectTo: 'list' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
