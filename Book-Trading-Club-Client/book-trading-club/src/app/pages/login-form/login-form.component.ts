import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  loginForm: FormGroup;
  constructor(
    public form: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    console.log('Init LoginFormComponent');
    // this.authService.getAuthenticationObject();
    this.buildForm();
  }

  loginWithGoogle() {
    this.authService.loginGoogle();
  }

  buildForm() {
    this.loginForm = this.form.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }

  get emailGetter() {
    return this.loginForm.get('email');
  }

  get passwordGetter() {
    return this.loginForm.get('password');
  }

  login() {
    // should perform loginCustomUser
    this.authService.loginCustomUser(this.email, this.password);
    console.log(this.authService.isLoggedIn);
  }
}
