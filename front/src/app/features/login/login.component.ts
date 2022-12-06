import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.models';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: UserModel;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: [''],
      senha: [''],
    });
  }

  submitLogin() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['products']);
        });
    }
  }
}
