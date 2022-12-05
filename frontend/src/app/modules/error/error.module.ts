import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UnauthorizedPageComponent } from './pages/unauthorized-page/unauthorized-page.component';
import { ExpiredPageComponent } from './pages/expired-page/expired-page.component';
import { AccountVerifiedPageComponent } from './pages/account-verified-page/account-verified-page.component';
import { VertificationEmailPageComponent } from './pages/vertification-email-page/vertification-email-page.component';
import { PasswordEmailPageComponent } from './pages/password-email-page/password-email-page.component';



@NgModule({
  declarations: [
    ErrorComponent,
    ForbiddenPageComponent,
    UnauthorizedPageComponent,
    ExpiredPageComponent,
    AccountVerifiedPageComponent,
    VertificationEmailPageComponent,
    PasswordEmailPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ErrorModule { }
