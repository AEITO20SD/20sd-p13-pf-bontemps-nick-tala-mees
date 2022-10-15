import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { ConfirmPasswordPageComponent } from './pages/confirm-password-page/confirm-password-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ResetPasswordPageComponent,
    ConfirmPasswordPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
