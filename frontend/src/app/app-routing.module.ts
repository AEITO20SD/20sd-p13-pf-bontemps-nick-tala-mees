import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { ReserveringComponent } from './reservering/pages/reservering/reservering.component';
import { LoginComponent } from './users/pages/login/login.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { SendComponent } from './users/pages/send/send.component';
import { VerifiedComponent } from './users/pages/verified/verified.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/send-verification-email', component: SendComponent },
  { path: 'register/verified', component: VerifiedComponent},
  { path: 'login', component: LoginComponent },
  { path: 'reservering/:id', component: ReserveringComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

