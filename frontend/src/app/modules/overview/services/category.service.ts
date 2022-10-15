import { Injectable } from '@angular/core';
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

  public getCategories(): any {
    return this.categoryRepository.getCategories();
  }
}
