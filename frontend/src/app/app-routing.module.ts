import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/authentication/pages/login-page/login-page.component';
import { LandingPageComponent } from './modules/landing/pages/landing-page/landing-page.component';

const routes: Routes = [
  // Landing page Route
  { path: '', component: LandingPageComponent },


  // login page Route
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
