import { NgModule } from '@angular/core';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {SignUpFormComponent} from '../pages/sign-up-form/sign-up-form.component';
import {LoginFormComponent} from '../pages/login-form/login-form.component';
import {SettingsComponent} from '../pages/settings/settings.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {MyBooksComponent} from '../pages/my-books/my-books.component';
import {AllBooksComponent} from '../pages/all-books/all-books.component';
import {RouterModule, Routes} from '@angular/router';
import {AlreadyLoggedInGuardService} from '../services/guards/already-logged-in-guard.service';
import {NotLoggedInGuardService} from '../services/guards/not-logged-in-guard.service';

const appRoutes: Routes = [
  {path: 'signup', component: SignUpFormComponent, canActivate: [AlreadyLoggedInGuardService]},
  {path: 'login', component: LoginFormComponent, canActivate: [AlreadyLoggedInGuardService]},
  {path: 'settings', component: SettingsComponent, canActivate: [NotLoggedInGuardService]},
  {path: 'mybooks', component: MyBooksComponent, canActivate: [NotLoggedInGuardService]},
  {path: 'allbooks', component: AllBooksComponent},
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class RoutingModule { }
