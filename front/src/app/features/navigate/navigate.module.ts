import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
// import { FeatureRoutingModule } from '../feature-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    DetailComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule,],
  exports: [
    // MenuComponent,
    // CartComponent,
    // DetailComponent,
  ],
  providers: [CartService],
})
export class NavigateModule {}
