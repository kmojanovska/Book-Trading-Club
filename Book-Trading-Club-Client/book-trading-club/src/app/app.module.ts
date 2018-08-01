import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './platform/routing.module';
import { SignUpFormComponent } from './pages/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users.service';
import {AlreadyLoggedInGuardService} from './services/guards/already-logged-in-guard.service';
import {NotLoggedInGuardService} from './services/guards/not-logged-in-guard.service';
import { BooksService } from './services/books.service';
import { TradeRequestsService } from './services/trade-requests.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    SignUpFormComponent,
    LoginFormComponent,
    SettingsComponent,
    PageNotFoundComponent,
    MyBooksComponent,
    AllBooksComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, UsersService, BooksService, TradeRequestsService, AlreadyLoggedInGuardService, NotLoggedInGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
