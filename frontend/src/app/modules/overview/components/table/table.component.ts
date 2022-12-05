import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationModel } from '../../models/reservation.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  public uniqueString: string = '';
  public reservation: ReservationModel[] = []

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getUniqueString(this.number).subscribe((response: ReservationModel[]) => {
      this.reservation = response;
      this.uniqueString = this.reservation[0].uniqueString;
    });
  }

  @Input() number: number = 0 ;
  @Input() size: string | undefined;
  @Input() shape: string | undefined;

  public redirect(number: number | undefined): void {
    this.router.navigate(['/restaurant/overview/details/' + number + '/' + this.uniqueString + '/1']);
  }
}
