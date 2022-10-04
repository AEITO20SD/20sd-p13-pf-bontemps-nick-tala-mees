import { Injectable } from "@angular/core";
import { ResetFormDataCheck, ResetFormData } from "../models/reset-form-data.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class ResetFormService {

    constructor(private http:HttpClient, private router: Router) { }

    // Function to check if the id and unique string are valid
    checkIdAndUniqueString(id: any, uniqueString: string) {
      // Creates the resetFormDataCheck object to send to the backend
      const resetFormDataCheck: ResetFormDataCheck = {uniqueString: uniqueString, _id: id};

      this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password-check', resetFormDataCheck).subscribe(response => {
        if(response['msg'] == 'Unique string does not compare'){
          this.router.navigate(['/error/403']);
        }
        if(response['msg'] == 'Link expired'){
          this.router.navigate(['/error/410']);
        }
      });
    }

    // Function to send the new password to the backend
    ResetPassword(id: any, uniqueString: string, password: string, passwordConfirm: string) {
      // Creates the resetFormData object to send to the backend
      const resetFormData: ResetFormData = {uniqueString: uniqueString, _id: id, password: password, confirmPassword: passwordConfirm};

      this.http.post<{msg: string}>('http://localhost:3080/users/login/reset-password-form', resetFormData).subscribe(response => {
        if(response['msg'] == 'Password has been succesfully reset'){
          this.router.navigate(['/login']);
        }
      });
    }
}
