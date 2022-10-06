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
import { ReserveringComponent } from './reservering/pages/reservering/reservering.component';
import { DatumKiezenComponent } from './reservering/shared/datum-kiezen/datum-kiezen.component';
import { GegevensComponent } from './reservering/shared/gegevens/gegevens.component';
import { MenuComponent } from './reservering/shared/menu/menu.component';
import { DatepipeComponent } from './home/shared/date/datepipe.component';
import { DatePipe } from '@angular/common';
import { OverzichtComponent } from './reservering/shared/overzicht/overzicht.component';

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
    ReserveringComponent,
    DatumKiezenComponent,
    GegevensComponent,
    MenuComponent,
    DatepipeComponent,
    OverzichtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
