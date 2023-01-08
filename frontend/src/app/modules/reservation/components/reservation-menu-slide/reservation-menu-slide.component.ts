import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { MenuRepository } from '../../repositories/menu.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-menu-slide',
  templateUrl: './reservation-menu-slide.component.html',
  styleUrls: ['./reservation-menu-slide.component.css'],
})
export class ReservationMenuSlideComponent implements OnInit {
  public menus: MenuModel[] = [];
  constructor(
    private menuService: MenuService,
    private menuRepository: MenuRepository,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.menuService.getMenus().subscribe((response: MenuModel[]) => {
    //   this.menus = response;
    // });
    this.getAllmenusImages();
  }

  //start get all menu images
  getAllmenusImages() {
    this.menuRepository.getAllMenus().subscribe({
      next: (response: MenuModel[]) => {
        this.menus = response;
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  //end get all menu images

  //redirect to new page.
  btnimage(id: any) {
    console.log('id', id);
    this.router.navigate(['/reservation-one-data/' + id]);
  }
}
