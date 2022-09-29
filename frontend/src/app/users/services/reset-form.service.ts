import { Injectable } from "@angular/core";
import { ResetFormDataCheck, ResetFormData } from "../models/reset-form-data.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class ResetFormService {

    constructor(private http:HttpClient, private router: Router) { }

    checkIdAndUniqueString(id: any, uniqueString: string) {

        const resetFormDataCheck: ResetFormDataCheck = {uniqueString: uniqueString, _id: id};

        this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password-check', resetFormDataCheck).subscribe(response => {
          console.log(response);
          if(response['msg'] == 'Unique string does not compare'){
            this.router.navigate(['/error/403']);
          }
        });
    }

    ResetPassword(id: any, uniqueString: string, password: string, passwordConfirm: string) {
      const resetFormData: ResetFormData = {uniqueString: uniqueString, _id: id, password: password, confirmPassword: passwordConfirm};

      this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password-form', resetFormData).subscribe(response => {
        console.log(response);
        if(response['msg'] == 'Password has been succesfully reset'){
          this.router.navigate(['/login']);
        }
      });
    }
}
