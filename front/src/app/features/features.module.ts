import { LoginService } from 'src/app/shared/services/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavigateModule } from './navigate/navigate.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavigateModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [
    LoginService
  ]
})
export class FeaturesModule { }
