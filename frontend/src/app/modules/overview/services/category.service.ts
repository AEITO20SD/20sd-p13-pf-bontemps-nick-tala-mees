import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { ICategoryService } from '../interfaces/icategory.service';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService implements ICategoryService {

  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  public getAddOns(categoryId: number): any {
    return this.categoryRepository.getAddOns(categoryId);
  }

  public getCategories(): any {
    return this.categoryRepository.getCategories();
  }

  public getUniqueString(tableId: number): any {
    return this.categoryRepository.getUniqueString(tableId);
  }

  public storeAddOns(addOns: any): any {
    return this.categoryRepository.storeAddOns(addOns);
  }

  public obeserver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getStoredAddOns(tableId: number): any {
    return this.categoryRepository.getStoredAddOns(tableId);
  }
}
