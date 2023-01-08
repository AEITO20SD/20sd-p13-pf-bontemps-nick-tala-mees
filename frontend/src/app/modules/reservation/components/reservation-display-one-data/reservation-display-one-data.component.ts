import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuRepository } from '../../repositories/menu.repository';

@Component({
  selector: 'app-reservation-display-one-data',
  templateUrl: './reservation-display-one-data.component.html',
  styleUrls: ['./reservation-display-one-data.component.css'],
})
export class ReservationDisplayOneDataComponent implements OnInit {
  id: any;
  recipeDatas: any[] = [];
  constructor(
    private menuRepository: MenuRepository,
    private acroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.acroute.snapshot.paramMap.get('id');
    this.getDatas();
  }

  //start get recipe data
  getDatas() {
    this.menuRepository.getOneMenuData(this.id).subscribe({
      next: (res) => {
        this.recipeDatas = res.Data;
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  //end get recipe data
}
