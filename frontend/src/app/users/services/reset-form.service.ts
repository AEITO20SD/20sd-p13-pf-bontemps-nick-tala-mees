import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class ResetFormService {

    constructor() { }

    checkIdAndUniqueString(id: any, uniqueString: string) {
        return true;
    }
}
