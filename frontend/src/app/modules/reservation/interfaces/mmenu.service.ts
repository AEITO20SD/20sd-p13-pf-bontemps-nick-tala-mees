import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IMenuService } from './imenu.service';
@Injectable({ providedIn: 'root' })
export class MockMenuService implements IMenuService {
  constructor() {}

  public getMenus(): any {
    return of([
      {
        id: 1,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/winter.png',
      },
      {
        id: 2,
        name: 'Zomer Menu',
        price: '35,00',
        description: 'allerlekkerste Zomer Menu',
        imgUrl: '/images/winter.png',
      },
      {
        id: 3,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 4,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 5,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 6,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 7,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 8,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
      {
        id: 9,
        name: 'Winter Menu',
        price: '30,00',
        description: 'allerlekkerste Winter Menu',
        imgUrl: '/assets/img/icon-logo.png',
      },
    ]);
  }
}
