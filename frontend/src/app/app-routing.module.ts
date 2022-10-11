import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountVerifiedComponent } from './errors/pages/account-verified/account-verified.component';
import { ExpiredComponent } from './errors/pages/expired/expired.component';
import { ForbiddenComponent } from './errors/pages/forbidden/forbidden.component';
import { PasswordEmailComponent } from './errors/pages/password-email/password-email.component';
import { UnauthorizedComponent } from './errors/pages/unauthorized/unauthorized.component';
import { VertificationEmailComponent } from './errors/pages/vertification-email/vertification-email.component';

import { HomeComponent } from './home/pages/home/home.component';
import { LoginComponent } from './users/pages/login/login.component';
import { RegisterComponent } from './users/pages/register/register.component';
import { ResetFormComponent } from './users/pages/reset-form/reset-form.component';
import { ResetComponent } from './users/pages/reset/reset.component';
import { AuthGuard } from './users/guard/auth.guard';
import { TableOverviewComponent } from './overview/pages/table-overview/table-overview.component';

const routes: Routes = [
  // Landing page Route
  { path: '', component: HomeComponent },

  // Register Routes
  { path: 'register', component: RegisterComponent },

  // Emaul Verification Routes
  { path: 'register/send-verification-email', component: VertificationEmailComponent },
  { path: 'register/verified', component: AccountVerifiedComponent },

  // Login routes
  { path: 'login', component: LoginComponent },

  // Password reset routes
  { path: 'login/reset-password', component: ResetComponent },
  { path: 'login/reset-password-send', component: PasswordEmailComponent },
  { path: 'login/reset-password-new/:id/:uniqueString', component: ResetFormComponent },

  // Error page routes
  { path: 'error/401', component: UnauthorizedComponent},
  { path: 'error/403', component: ForbiddenComponent },
  { path: 'error/410', component: ExpiredComponent },

  // Table overview routes
  { path: 'restaurant/overview', component: TableOverviewComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

