import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IMenuService } from '../interfaces/imenu.service';
import { MenuRepository } from '../repositories/menu.repository';
@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseService implements IMenuService {
  constructor(private menuRepository: MenuRepository) {
    super();
  }

  public getMenus(): any {
    return this.menuRepository.getMenus();
  }
}
