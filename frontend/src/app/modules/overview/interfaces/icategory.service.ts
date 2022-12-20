export interface ICategoryService {
  getCategories(): any;
  getAddOns(categoryId: number): any;
  getUniqueString(tableId: number): any;
  storeAddOns(addOns: any): any;
  obeserver: any;
  getStoredAddOns(): any;
}
