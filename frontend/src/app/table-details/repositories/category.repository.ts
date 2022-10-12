import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable({providedIn: "root"})
export class CategoryRepository {

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get<Category[]>("http://localhost:3080/categories/");
  }
}
