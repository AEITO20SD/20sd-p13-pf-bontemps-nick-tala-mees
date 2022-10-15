import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { MockAuthService } from './modules/authentication/interfaces/mauth.service';
import { AuthService } from './modules/authentication/services/auth.service';
import { ErrorModule } from './modules/error/error.module';
import { LandingModule } from './modules/landing/landing.module';
import { MockCategoryService } from './modules/overview/interfaces/mcategory.service';
import { OverviewModule } from './modules/overview/overview.module';
import { CategoryService } from './modules/overview/services/category.service';

const testing = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AuthenticationModule,
    LandingModule,
    ErrorModule,
    OverviewModule
  ],
  providers: [
     {provide: AuthService, useClass: testing ? MockAuthService : AuthService},
     {provide: CategoryService, useClass: testing ? MockCategoryService : CategoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
