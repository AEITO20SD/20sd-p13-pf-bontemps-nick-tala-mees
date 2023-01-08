import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu.model';
import { IMenuRepository } from '../interfaces/imenu.repository';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MenuRepository implements IMenuRepository {
  constructor(private httpClient: HttpClient) {}

  public getMenus(): any {
    return this.httpClient.get<MenuModel[]>('http://localhost:3080/menus/');
  }
  //define all APIs
  public getAllMenus(): Observable<any> {
    return this.httpClient.get<MenuModel[]>(
      'http://localhost:3080/menus/getAllMenus'
    );
  }
  public getOneMenuData(id: any): Observable<any> {
    return this.httpClient.get<MenuModel[]>(
      'http://localhost:3080/menus/getOneMenuData/' + id
    );
  }
}
