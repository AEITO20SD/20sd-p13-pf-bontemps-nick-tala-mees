import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
