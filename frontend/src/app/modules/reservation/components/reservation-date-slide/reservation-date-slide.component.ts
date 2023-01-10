import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.services';
import { CalanderModel } from '../../models/calander.model';
import { TimePeriodModel } from '../../models/timePeriod.model';

@Component({
  selector: 'app-reservation-date-slide',
  templateUrl: './reservation-date-slide.component.html',
  styleUrls: ['./reservation-date-slide.component.css']
})
export class ReservationDateSlideComponent implements OnInit {

  public amountError: string = '';
  public uniqueString: string = "";
  public guestAmount: number = 0;
  public calander: CalanderModel[] = [];
  public selectedDate: Date | undefined = undefined;
  public timePeriods: TimePeriodModel[] = [];

  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService) { }   

  ngOnInit(): void {
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];

    this.reservationService.getGeneratedCalander().subscribe((response: CalanderModel[]) => {
      this.calander = response;
    });
  }

  public async selectDate(_date: CalanderModel): Promise<void> {
    this.selectedDate = _date.date;
    this.timePeriods = _date.timePeriods.slice(0, -4);
  }

  public async selectTime(_date: Date): Promise<void> {
    await this.reservationService.updateReservation(this.guestAmount, this.uniqueString, _date,);
  }

  public async resetSelectedTimeDate(e: any): Promise<void> {
    this.timePeriods = [];
    this.selectedDate = undefined;

    // add given people to calander
    // loop through days
    for (let i = 0; i < this.calander.length; i++) {

      // Counter for full timePeriods
      let counter: number = 0;
      
      // loop through time periods
      for (let j = 0; j < this.calander[i].timePeriods.length; j++) {
        
        // Check if the timeperiod is full
        if(this.calander[i].timePeriods[j].peopleCounter + this.guestAmount > 50) {

          // Sets the timePeriod as unavailable
          this.calander[i].timePeriods[j].availability = 'unavailable';

          // add to counter
          counter++;
        } else {

          // Sets the timePeriod as available
          this.calander[i].timePeriods[j].availability = 'available';
        }
      }

      // Check if all timeperiods are full
      if (counter === 25) {

        // Sets the day as unavailable
        this.calander[i].availability = 'unavailable';
      } else {
        // Sets the day as available
        this.calander[i].availability = 'available';
      }
    }
  }
}
