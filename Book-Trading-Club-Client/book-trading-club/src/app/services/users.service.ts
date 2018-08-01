import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BookSample} from '../models/book-sample.model';
import {TradeRequest} from '../models/tradeRequest.model';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {

  // private apiMyTradeRequests = 'api/user/requests';
  // private apiSentTradeRequests = 'api/user/requested';
  private apiCreateUserUrl = 'api/create-user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  createUser(username: string, password: string, fullName: string, city: string, state: string, email: string) {
    console.log('In user service createUser method with params', username, password);
    this.http.post(this.apiCreateUserUrl,
      {username, password, fullName, city, state, email},
      {headers: new HttpHeaders().set('Content-type', 'application/json')})
      .subscribe(response => {
        console.log('Created user: ', response);
        this.authService.loginCustomUser(email, password);
      });
  }
}
