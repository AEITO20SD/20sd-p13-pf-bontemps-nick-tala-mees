import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-reservation-menu-slide',
  templateUrl: './reservation-menu-slide.component.html',
  styleUrls: ['./reservation-menu-slide.component.css'],
})
export class ReservationMenuSlideComponent implements OnInit {
  public menus: MenuModel[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((response: MenuModel[]) => {
      this.menus = response;
    });
  }
  // Input() public id: number = 0;
}
