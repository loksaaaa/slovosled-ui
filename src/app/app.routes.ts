import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',     component: LoginComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: '**',        redirectTo: '/login' }
];
