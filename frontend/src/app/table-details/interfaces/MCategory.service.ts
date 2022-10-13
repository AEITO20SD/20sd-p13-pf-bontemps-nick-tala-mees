import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { CategoryRepository } from "../repositories/category.repository";
import { ICategoryService} from "./ICategory.service";

@Injectable({providedIn: "root"})
export class MockCategoryService implements ICategoryService {

  constructor() { }

  getCategories(): any {
    return of([{id: 1, name: "Category 1"}, {id: 2, name: "Category 2"}]);
  }
}
