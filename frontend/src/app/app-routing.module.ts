import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/authentication/guards/auth.guard';
import { ConfirmPasswordPageComponent } from './modules/authentication/pages/confirm-password-page/confirm-password-page.component';
import { LoginPageComponent } from './modules/authentication/pages/login-page/login-page.component';
import { RegisterPageComponent } from './modules/authentication/pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from './modules/authentication/pages/reset-password-page/reset-password-page.component';
import { AccountVerifiedPageComponent } from './modules/error/pages/account-verified-page/account-verified-page.component';
import { ExpiredPageComponent } from './modules/error/pages/expired-page/expired-page.component';
import { ForbiddenPageComponent } from './modules/error/pages/forbidden-page/forbidden-page.component';
import { PasswordEmailPageComponent } from './modules/error/pages/password-email-page/password-email-page.component';
import { UnauthorizedPageComponent } from './modules/error/pages/unauthorized-page/unauthorized-page.component';
import { VertificationEmailPageComponent } from './modules/error/pages/vertification-email-page/vertification-email-page.component';
import { LandingPageComponent } from './modules/landing/pages/landing-page/landing-page.component';
import { TableDetailsComponent } from './modules/overview/pages/table-details/table-details.component';
import { TableOverviewPageComponent } from './modules/overview/pages/table-overview-page/table-overview-page.component';

const routes: Routes = [

  // Landing page Route
  { path: '', component: LandingPageComponent },

  // login page Route
  { path: 'login', component: LoginPageComponent },
  { path: 'login/reset-password', component: ResetPasswordPageComponent },
  { path: 'login/reset-password-send', component: PasswordEmailPageComponent },
   { path: 'login/reset-password-new/:id/:uniqueString', component: ConfirmPasswordPageComponent },

  // Register page Route
  { path: 'register', component: RegisterPageComponent },
  { path: 'register/send-verification-email', component: VertificationEmailPageComponent },
  { path: 'register/verified', component: AccountVerifiedPageComponent },

  // Error page Route
  { path: 'error/401', component: UnauthorizedPageComponent},
  { path: 'error/403', component: ForbiddenPageComponent },
  { path: 'error/410', component: ExpiredPageComponent },

  // Overview page Route
  { path: 'restaurant/overview', component: TableOverviewPageComponent, canActivate: [AuthGuard] },
  { path: 'restaurant/overview/details/:table/:uniqueString/:id', component: TableDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
