import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleLeft, faShare, faMoneyBill  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public faAngleLeft: any = faAngleLeft;
  public faPaperPlane: any = faShare;
  public faMoneyBill: any = faMoneyBill;

  public uniqueString: string | undefined;
  public tableNumber: number | undefined;

  ngOnInit(): void {
    this.uniqueString = this.activatedRoute.snapshot.params['uniqueString'];
    this.tableNumber = this.activatedRoute.snapshot.params['table'];
  }

  public goBack(): void {
    this.router.navigate(['/restaurant/overview']);
  }

  public checkOut(): void {
    const _id = 1;
    this.router.navigate(['/restaurant/overview/checkout/' + this.tableNumber + '/' + this.uniqueString + '/' + _id]);
  }

}
