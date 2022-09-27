import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { LoginComponent } from './users/pages/login/login.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { ResetSendComponent } from './users/pages/reset-send/reset-send.component';
import { ResetComponent } from './users/pages/reset/reset.component';
import { SendComponent } from './users/pages/send/send.component';
import { VerifiedComponent } from './users/pages/verified/verified.component';

const routes: Routes = [
  // Landing page Route
  { path: '', component: HomeComponent },

  // Register Routes
  { path: 'register', component: RegisterComponent },

  // Emaul Verification Routes
  { path: 'register/send-verification-email', component: SendComponent },
  { path: 'register/verified', component: VerifiedComponent},

  // Login routes
  { path: 'login', component: LoginComponent },

  // Password reset routes
  { path: 'login/reset-password', component: ResetComponent },
  { path: 'login/reset-password-send', component: ResetSendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

