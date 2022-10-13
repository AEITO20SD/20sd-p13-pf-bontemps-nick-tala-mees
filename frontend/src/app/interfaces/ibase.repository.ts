export interface IBaseRepository {

    getAll(url: string, object: any): any;

    getOne(url: string, object: any, identifier: any): any;

    create(url: string, object: any): any;

    update(url: string, object: any): any;

    delete(url: string, object: any): any;
}
