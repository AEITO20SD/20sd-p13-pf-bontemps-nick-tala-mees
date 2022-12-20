
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategoryRepository } from "../interfaces/icategory.repository";
import { AddOnModel } from "../models/addon.model";
import { CategoryModel } from "../models/category.model";
import { ReservationModel } from "../models/reservation.model";

@Injectable({providedIn: "root"})
export class CategoryRepository implements ICategoryRepository {

  constructor(private httpClient: HttpClient) { }

  public getAddOns(categoryId: number): any {
    return this.httpClient.get<AddOnModel[]>(`http://localhost:3080/categories/addons/${categoryId}`);
  }

  public getCategories(): any {
    return this.httpClient.get<CategoryModel[]>("http://localhost:3080/categories/");
  }

  public getUniqueString(tableId: number): any {
    return this.httpClient.get<ReservationModel[]>(`http://localhost:3080/reservation/${tableId}`);
  }

  public storeAddOns(addOns: any): any {
    this.httpClient.post<{addons: any}>("http://localhost:3080/categories/addons/stored", addOns).subscribe();
  }

  public getStoredAddOns(tableId: number): any {
    return this.httpClient.get<any>(`http://localhost:3080/categories/addons/stored/get/${tableId}`);
  }
}
