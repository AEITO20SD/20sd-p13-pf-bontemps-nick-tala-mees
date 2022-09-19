import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { PageComponent } from './users/login/page/page.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { UserInputComponent } from './users/shared/user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    HomeComponent,
    UserInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
