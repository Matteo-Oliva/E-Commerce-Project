import { HomeComponent } from './features/layout/home/home.component';
import { CartComponent } from './features/basket/cart/cart.component';
import { DetailComponent } from './features/products/detail/detail.component';
import { ListComponent } from './features/products/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';



const accountModule = () => import('./features/account/account.module').then(x => x.AccountModule);

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path: 'cart', component: CartComponent ,canActivate: [ AuthGuard]},
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent ,canActivate: [ AuthGuard]},
  { path: 'account', loadChildren: accountModule },
  { path: '**', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
