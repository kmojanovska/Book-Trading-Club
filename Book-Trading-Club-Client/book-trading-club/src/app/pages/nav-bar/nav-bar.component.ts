import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loadUsername(): string {
    if (this.authService.loggedUser !== undefined) {
      return this.authService.loggedUser.username;
    } else {
      return undefined;
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): Observable<any> {
    return this.authService.logout();
  }

}
