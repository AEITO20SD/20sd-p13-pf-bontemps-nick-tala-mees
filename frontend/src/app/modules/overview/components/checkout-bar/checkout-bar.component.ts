import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout-bar',
  templateUrl: './checkout-bar.component.html',
  styleUrls: ['./checkout-bar.component.css']
})
export class CheckoutBarComponent implements OnInit {

  public faAngleLeft: any = faAngleLeft;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public uniqueString: string | undefined;
  public tableNumber: number | undefined;

  ngOnInit(): void {
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];
    this.tableNumber = this.activatedRoute.snapshot.params['table'];
  }

  public goBack(): void {
    this.router.navigate(['/restaurant/overview/details/' + this.tableNumber + '/' + this.uniqueString + '/' + 1]);
  }

}
