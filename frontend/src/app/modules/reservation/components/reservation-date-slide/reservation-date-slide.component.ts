import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { timeStamp } from 'console';
import { ReservationDateModel } from '../../models/reservationDate.model';
import { DateModel } from '../../models/date.model';

@Component({
  selector: 'app-reservation-date-slide',
  templateUrl: './reservation-date-slide.component.html',
  styleUrls: ['./reservation-date-slide.component.css']
})
export class ReservationDateSlideComponent implements OnInit {

  public amountError: string = '';
  public guestAmount: number = 0;
  public errorAmount: boolean = false;
  public showDate: boolean = true;
  public showTime: boolean = false;

  public calander: Array<DateModel> = [];

  constructor() { }   

  ngOnInit(): void {
    for (let i = 0; i < 28; i++) {
      let date: Date = new Date();
      date.setDate(date.getDate() + i);
      this.calander[i] = { 
        day: this.getDayFromNumber(date.getDay()), 
        date: date.getDate(), 
        month: date.getMonth(), 
        year: date.getFullYear() - 2000,
      };
    }
  }

  // Handels what to do when amount changes
  amountChanged(amount: number): void {
    if(amount < 4 && amount !== null) {
      this.errorAmount = true;
      this.showDate = false;
    } else if(amount !== null) {
      this.errorAmount = false;
      this.showDate = true;
    } else {
      this.errorAmount = false;
      this.showDate = false;
    }
    console.log(this.guestAmount);
  }

  // Function to get the Day in string value from number
  getDayFromNumber(value: number): string {
    let dayString: string = '';

    switch(value) {
      case 0:
        dayString = 'Sun';
        break;
      case 1:
        dayString = 'Mon';
        break;
      case 2:
        dayString = 'Tue';
        break;
      case 3:
        dayString = 'Wed';
        break;
      case 4:
        dayString = 'Thu';
        break;
      case 5:
        dayString = 'Fri';
        break;
      case 6:
        dayString = 'Sat';
        break;
      default:
        dayString = 'Undifiend';
        break;
    }
    return dayString;
  }
}
