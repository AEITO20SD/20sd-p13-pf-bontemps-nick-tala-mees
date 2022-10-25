import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class ReservationModule { }
