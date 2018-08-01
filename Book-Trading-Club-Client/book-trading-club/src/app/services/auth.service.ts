import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/finally';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
  private apiCustomLoginUrl = '/api/login';
  private apiUsername = '/api/user';
  private apiLogoutUrl = '/api/logout';
  private apiSaveNewPasswordUrl = '/api/update-password';
  private apiSaveProfileChangesUrl = '/api/update-user-details';
  isLoggedIn = false;
  loggedUser: User;
  loginWithGoogle: boolean;
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor (private http: HttpClient, private router: Router) {}

  loginCustomUser(email: string, password: string): any {
    const body = `username=${email}&password=${password}&submit=Login`;
    return this.http.post(this.apiCustomLoginUrl, body, {headers: this.headers})
      .subscribe(it => {
        if (it == null) {
          this.isLoggedIn = true;
          this.loadUser();
          console.log('loggeduser, auth service  ', this.loggedUser);
          this.router.navigate(['/']);
        } else {
          console.log('Bad credentials');
        }
      });
  }

  loadUser() {
    this.http.get<User>(this.apiUsername)
      .map(response => {
        console.log('loadusername');
         return response['principal'] as User;
      }).subscribe(it => {
        this.loggedUser = it;
      });
  }

  /*
    This feature is yet to be implemented.
  */

  loginGoogle() {
    this.loginWithGoogle = true;
    this.router.navigate(['/']);
  }

  saveNewPassword(newPassword: string) {
    const formData = new FormData();
    formData.append('username', this.loggedUser.username);
    formData.append('password', newPassword);
    this.http.post(this.apiSaveNewPasswordUrl, formData)
      .subscribe(response => console.log('AuthService: saveNewPassword'));
  }

  saveProfileChanges(city: string, state: string) {
    const formData = new FormData();
    formData.append('username', this.loggedUser.username);
    formData.append('city', city);
    formData.append('state', state);
    this.http.post(this.apiSaveProfileChangesUrl, formData)
      .subscribe(response => console.log('AuthService: saveProfileChanges'));
  }

  logout(): Observable<any> {
    console.log('logout, auth service');
    return this.http.get(this.apiLogoutUrl)
      .map(() => {
        this.isLoggedIn = false;
        this.loggedUser = undefined;
        this.router.navigate(['/']);
      });
  }

  /*
    This feature is yet to be implemented.
  */

  getAuthenticationObject() {
    return this.http.get<any>('/api/public/users/principal');
  }
}
