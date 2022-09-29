import { Injectable } from "@angular/core";
import { ResetFormDataCheck } from "../models/reset-form-data.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class ResetFormService {

    constructor(private http:HttpClient, private router: Router) { }

    checkIdAndUniqueString(id: any, uniqueString: string) {

        const resetFormDataCheck: ResetFormDataCheck = {uniqueString: uniqueString, _id: id};

        this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password-check', resetFormDataCheck).subscribe(response => {
          console.log(response);
          // if(response['msg'] == 'Password recovery email send'){
          //   this.router.navigate(['/login/reset-password-send']);
          // }
        });
    }
}
