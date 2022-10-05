import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/pages/home/home.component';
import { AfgerondComponent } from './reservering/shared/afgerond/afgerond.component';
import { DatumKiezenComponent } from './reservering/shared/datum-kiezen/datum-kiezen.component';
import { GegevensComponent } from './reservering/shared/gegevens/gegevens.component';
import { MenuComponent } from './reservering/shared/menu/menu.component';
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
  { path: 'datum-kiezen', component: DatumKiezenComponent },
  { path: 'gegevens', component: GegevensComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'afgerond', component: AfgerondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

