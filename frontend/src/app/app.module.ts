import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { PageComponent } from './users/login/page/page.component';
import { InputsComponent } from './users/login/inputs/inputs.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    InputsComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    ContactComponent,
    ReserverenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'menu', component: MenuComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'reserveren', component: ReserverenComponent },
      { path: 'inloggen', component: PageComponent }
    ]),
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
