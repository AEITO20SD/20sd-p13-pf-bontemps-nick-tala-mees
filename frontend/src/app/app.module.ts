import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { LoginComponent } from './users/pages/login/login.component';
import { HomeComponent } from './home/pages/home/home.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { SuccessComponent } from './users/shared/success/success.component';
import { VerifiedComponent } from './users/pages/verified/verified.component';
import { SendComponent } from './users/pages/send/send.component';
import { ResetSendComponent } from './users/pages/reset-send/reset-send.component';
import { ResetComponent } from './users/pages/reset/reset.component';
import { ResetFormComponent } from './users/pages/reset-form/reset-form.component';
import { UnauthorizedComponent } from './errors/pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './errors/pages/forbidden/forbidden.component';
import { StatusCodeComponent } from './errors/shared/status-code/status-code.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthIntercepter } from './users/shared/auth-intercepter';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SuccessComponent,
    VerifiedComponent,
    SendComponent,
    ResetSendComponent,
    ResetComponent,
    ResetFormComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    StatusCodeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
