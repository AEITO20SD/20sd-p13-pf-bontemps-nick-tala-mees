import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {
  constructor(public datepipe: DatePipe) { }
  startdateofweek: any;
  Enddateofweek: string | any;
  model: any = {};
  date = new Date()
  name: string | any;
  Friday: any;
  Thruds: any;
  mon: any;
  Tuesday: any;
  Wednedday: any;
  Sat: any;
  Sun: any;

  ngOnInit() {

    var dt = new Date();
    function addDays(date: Date, days: number) {
      const find = new Date(Number(date))
      find.setDate(date.getDate() + days)
      return find
    }
    const date = new Date((dt));
    this.mon = this.datepipe.transform((dt), 'EEEE, MMMM d');
    this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');
    this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');
    this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');
    this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');
    this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');
    this.Sun = this.datepipe.transform(addDays(date, 6), 'EEEE, MMMM d');

  }
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();




  // startdateofweek: any;  
  // Enddateofweek: string | any;  
  // model: any = {};  
  // date = new Date()  
  // name: string | any;  
  // Friday: any;  
  // Thruds: any;  
  // mon: any;  
  // Tuesday: any;  
  // Wednedday: any;  
  // Sat: any;  
  // Sun: any;  


  // constructor(public datepipe: DatePipe) { }  
  // ngOnInit() {  }
  //   this.model.startdate = new Date();  
  //   debugger;  
  // }  
  // getDate() {  

  //   debugger;  
  //   console.log(this.model.startdate);  
  //   let getdate: any = this.datepipe.transform(this.model.startdate, 'yyyy,M,d');  

  //   var dt = new Date(getdate);  
  //   this.startdateofweek= this.datepipe.transform((dt),'EEEE, MMMM d, y');  
  //   this.Enddateofweek=this.datepipe.transform((dt),'EEEE, MMMM d, y');  

  // function addDays(date: Date, days: number) {  
  //   const find = new Date(Number(date))  
  //   find.setDate(date.getDate() + days)  
  //   return find  
  // }  
  //   const date = new Date((dt));  
  //   this.mon = this.datepipe.transform((dt), 'EEEE, MMMM d');  
  //   this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');  
  //   this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');  
  //   this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');  
  //   this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');  
  //   this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');  
  //   this.Sun = this.datepipe.transform((dt), 'EEEE, MMMM d');  
  // }  
}
