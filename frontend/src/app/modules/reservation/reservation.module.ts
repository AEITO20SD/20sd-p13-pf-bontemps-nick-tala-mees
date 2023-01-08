import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReservationDateSlideComponent } from './components/reservation-date-slide/reservation-date-slide.component';
import { ReservationMenuSlideComponent } from './components/reservation-menu-slide/reservation-menu-slide.component';
import { ReservationDataSlideComponent } from './components/reservation-data-slide/reservation-data-slide.component';
import { ReservationOverviewSlideComponent } from './components/reservation-overview-slide/reservation-overview-slide.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ReservationDisplayOneDataComponent } from './components/reservation-display-one-data/reservation-display-one-data.component';

@NgModule({
  declarations: [
    ReservationComponent,
    ReservationDateSlideComponent,
    ReservationMenuSlideComponent,
    ReservationDataSlideComponent,
    ReservationOverviewSlideComponent,
    ProgressBarComponent,
    ReservationDisplayOneDataComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule, FontAwesomeModule],
})
export class ReservationModule {}
