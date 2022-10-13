import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { MockAuthService } from './modules/authentication/interfaces/mauth.service';
import { AuthService } from './modules/authentication/services/auth.service';
import { LandingModule } from './modules/landing/landing.module';

const testing = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthenticationModule,
    LandingModule
  ],
  providers: [
     {provide: AuthService, useClass: testing ? MockAuthService : AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
