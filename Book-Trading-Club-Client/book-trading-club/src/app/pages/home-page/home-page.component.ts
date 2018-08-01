import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    /* if (this.authService.loginWithGoogle === true && ! this.authService.isLoggedIn) {
      this.authService.getAuthenticationObject()
      .subscribe(data => {
        console.log(data);
        this.authService.isLoggedIn = true;
        this.authService.loginWithGoogle = false;
          // this.loggedUsername = response['name'];
    });
    }*/
    console.log('In home page, loggedin status: ', this.authService.isLoggedIn);
    console.log('In home page, user: ', this.authService.loggedUser);
  }

}
