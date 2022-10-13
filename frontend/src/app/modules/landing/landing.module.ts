import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class LandingModule { }
