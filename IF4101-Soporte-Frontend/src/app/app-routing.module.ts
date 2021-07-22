import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { LoginSoportComponent } from './components/login-soport/login-soport.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'support-list'   , component: SupportListComponent},
  { path: 'login-soport'   , component: LoginSoportComponent },
  { path: 'home'   , component: HomeComponent,canActivate:[ AuthGuard] },
  { path: 'profile'   , component: ProfileComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
