import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu.model';
import { IMenuRepository } from '../interfaces/imenu.repository';
@Injectable({ providedIn: 'root' })
export class MenuRepository implements IMenuRepository {
  constructor(private httpClient: HttpClient) {}

  public getMenus(): any {
    return this.httpClient.get<MenuModel[]>('http://localhost:3080/menus/');
  }
}
