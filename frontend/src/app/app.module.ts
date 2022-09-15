import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { PageComponent } from './users/login/page/page.component';
import { InputsComponent } from './users/login/inputs/inputs.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    InputsComponent
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
