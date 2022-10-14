import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/authentication/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/authentication/pages/register-page/register-page.component';
import { AccountVerifiedPageComponent } from './modules/error/pages/account-verified-page/account-verified-page.component';
import { ExpiredPageComponent } from './modules/error/pages/expired-page/expired-page.component';
import { ForbiddenPageComponent } from './modules/error/pages/forbidden-page/forbidden-page.component';
import { PasswordEmailPageComponent } from './modules/error/pages/password-email-page/password-email-page.component';
import { UnauthorizedPageComponent } from './modules/error/pages/unauthorized-page/unauthorized-page.component';
import { VertificationEmailPageComponent } from './modules/error/pages/vertification-email-page/vertification-email-page.component';
import { LandingPageComponent } from './modules/landing/pages/landing-page/landing-page.component';

const routes: Routes = [

  // Landing page Route
  { path: '', component: LandingPageComponent },

  // login page Route
  { path: 'login', component: LoginPageComponent },
  { path: 'login/reset-password-send', component: PasswordEmailPageComponent },

  // Register page Route
    { path: 'register', component: RegisterPageComponent },
  { path: 'register/send-verification-email', component: VertificationEmailPageComponent },
  { path: 'register/verified', component: AccountVerifiedPageComponent },

  // Error page Route
  { path: 'error/401', component: UnauthorizedPageComponent},
  { path: 'error/403', component: ForbiddenPageComponent },
  { path: 'error/410', component: ExpiredPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
