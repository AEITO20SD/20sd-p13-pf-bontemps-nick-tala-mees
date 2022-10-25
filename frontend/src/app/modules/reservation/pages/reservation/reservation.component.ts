import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
active: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public buttonNextName: string = "Next" ;
  public buttonPreviousDisabled: boolean = false;
  public currentStep: number = 0;
  public maxStep: number = 5;
  public minimumStep: number = 1;


  ngOnInit(): void {
    this.currentStep =  parseInt(this.activatedRoute.snapshot.params['id']);
    if(this.currentStep == this.minimumStep) {
      this.buttonPreviousDisabled = true;
    } else if(this.currentStep == this.maxStep) {
      this.buttonNextName = "Finish";
    }
  }

  public nextStep(): void {
    if(this.currentStep == this.maxStep) {
      this.router.navigate(['/']);
    } else {
      this.currentStep++;
      this.router.navigate(['/reservation/hfhfhf/' + this.currentStep]);
    }
  }

  public previousStep(): void {
    this.currentStep--;
    this.router.navigate(['/reservation/hfhfhf/' + this.currentStep]);
  }

}
