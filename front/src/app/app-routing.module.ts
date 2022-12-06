import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/navigate/cart/cart.component';
import { DetailComponent } from './features/navigate/detail/detail.component';
import { MenuComponent } from './features/navigate/menu/menu.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products', component: MenuComponent },
      { path: 'register', component: RegisterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
