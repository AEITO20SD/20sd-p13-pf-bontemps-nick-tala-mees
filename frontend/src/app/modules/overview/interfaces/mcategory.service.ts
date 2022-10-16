import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { ICategoryService } from "./icategory.service";

@Injectable({providedIn: "root"})
export class MockCategoryService implements ICategoryService {

  constructor() { }

  public getAddOns(categoryId: number) {
    return of([{id: 1, name: "AddOn 1", price: "2.70"}, {id: 2, name: "AddOn 2", price: "3.70"}]);
  }

  public getCategories(): any {
    return of([{id: 1, name: "Category 1"}, {id: 2, name: "Category 2"}]);
  }
}
