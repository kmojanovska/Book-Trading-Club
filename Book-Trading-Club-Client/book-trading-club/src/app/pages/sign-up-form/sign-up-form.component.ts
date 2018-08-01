import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  fullName: string;
  city: string;
  state: string;
  /*
  Source: https://stackoverflow.com/a/19605207
  This regex will enforce these rules:
      * At least one upper case English letter, (?=.*?[A-Z])
      * At least one lower case English letter, (?=.*?[a-z])
      * At least one digit, (?=.*?[0-9])
      * At least one special character, (?=.*?[#?!@$%^&*-])
      * Minimum eight in length .{8,} (with the anchors)
   */
  passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

  signUpForm: FormGroup;
  constructor(public form: FormBuilder, private userService: UsersService) { }

  buildForm() {
    this.signUpForm = this.form.group(
      {
        username: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
        fullName: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
      }
    );
  }

  get emailGetter() {
    return this.signUpForm.get('email');
  }

  get usernameGetter() {
    return this.signUpForm.get('username');
  }

  get passwordGetter() {
    return this.signUpForm.get('password');
  }

  ngOnInit() {
    console.log('Init SignUpComponent');
    this.buildForm();
  }

  signUp() {
    if (this.signUpForm.valid) {
      // should perform sign up here
      this.userService.createUser(this.username, this.password, this.fullName, this.city, this.state, this.email);
      this.signUpForm.reset();
    }
  }

}
