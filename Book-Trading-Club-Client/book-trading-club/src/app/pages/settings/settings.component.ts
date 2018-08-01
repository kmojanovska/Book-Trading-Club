import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  city: string;
  state: string;

  newPassword: string;

  settingsForm: FormGroup;
  passwordForm: FormGroup;

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

  constructor(public formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.buildForms();
  }

  buildForms() {
    this.settingsForm = this.formBuilder.group({
      city: [''],
      state: []
    });
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.pattern(this.passwordRegex)]]
    });
  }

  get passwordGetter() {
    return this.passwordForm.get('newPassword');
  }

  saveProfileChanges() {
    this.authService.saveProfileChanges(this.city, this.state);
  }

  saveNewPassword() {
    this.authService.saveNewPassword(this.newPassword);
  }

}
