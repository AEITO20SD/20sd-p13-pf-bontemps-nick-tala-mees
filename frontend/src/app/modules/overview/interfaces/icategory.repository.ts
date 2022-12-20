export interface ICategoryRepository {
  getCategories(): any;
  getAddOns(categoryId: number): any;
  getUniqueString(tableId: number): string;
  storeAddOns(addOns: any): any;
  getStoredAddOns(): any;
}
