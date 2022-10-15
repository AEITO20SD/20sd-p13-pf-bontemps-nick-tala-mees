import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { ICategoryService } from "./icategory.service";

@Injectable({providedIn: "root"})
export class MockCategoryService implements ICategoryService {

  constructor() { }

  getCategories(): any {
    return of([{id: 1, name: "Category 1"}, {id: 2, name: "Category 2"}]);
  }
}
