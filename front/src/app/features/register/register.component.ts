import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { UserModel } from 'src/app/shared/models/user.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  user: UserModel;
  formResult: string = '';
  errors: any[] = [];
  subscription: Array<Subscription> = [];

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  addUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.user.usuario = this.user.nome;

      this.loginService
        .registerUser(this.user)
        .subscribe((response) => this.router.navigate(['/login']));
    }
  }

  processForm(res: any) {
    this.registerForm.reset();
    this.errors = [];
    this.router.navigate(['/login']);
  }

  processFormFail(fail: any) {
    this.errors = fail.error.errors;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((e) => e.unsubscribe());
  }
}
