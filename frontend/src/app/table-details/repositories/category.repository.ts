import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategoryRepository } from "../interfaces/ICategory.repository";
import { Category } from "../models/category.model";

@Injectable({providedIn: "root"})
export class CategoryRepository implements ICategoryRepository {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): any {
    return this.httpClient.get<Category[]>("http://localhost:3080/categories/");
  }
}
