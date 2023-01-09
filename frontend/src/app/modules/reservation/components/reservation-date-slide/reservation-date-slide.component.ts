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

  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService) { }   

  ngOnInit(): void {
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];

    this.reservationService.getGeneratedCalander().subscribe((response: CalanderModel[]) => {
      this.calander = response;
    });
  }

  public async selectDate(_date: CalanderModel): Promise<void> {
    this.selectedDate = _date.date;
    this.timePeriods = _date.timePeriods;
  }


  }
}
