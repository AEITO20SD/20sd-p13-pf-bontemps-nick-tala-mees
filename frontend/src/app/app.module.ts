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
import { ResetComponent } from './users/pages/reset/reset.component';
import { ResetFormComponent } from './users/pages/reset-form/reset-form.component';
import { UnauthorizedComponent } from './errors/pages/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './errors/pages/forbidden/forbidden.component';
import { StatusCodeComponent } from './errors/shared/status-code/status-code.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthIntercepter } from './users/shared/auth-intercepter';
import { ExpiredComponent } from './errors/pages/expired/expired.component';
import { AccountVerifiedComponent } from './errors/pages/account-verified/account-verified.component';
import { VertificationEmailComponent } from './errors/pages/vertification-email/vertification-email.component';
import { PasswordEmailComponent } from './errors/pages/password-email/password-email.component';
import { TableOverviewComponent } from './overview/pages/table-overview/table-overview.component';
import { TableComponent } from './overview/shared/table/table.component';
import { TableDetailsComponent } from './table-details/pages/table-details/table-details.component';
import { AddonComponent } from './table-details/shared/addon/addon.component';
import { ReceiptComponent } from './table-details/shared/receipt/receipt.component';
import { AppBarComponent } from './table-details/shared/app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ResetComponent,
    ResetFormComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    StatusCodeComponent,
    NavbarComponent,
    ExpiredComponent,
    AccountVerifiedComponent,
    VertificationEmailComponent,
    PasswordEmailComponent,
    TableOverviewComponent,
    TableComponent,
    TableDetailsComponent,
    AddonComponent,
    ReceiptComponent,
    AppBarComponent,
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
