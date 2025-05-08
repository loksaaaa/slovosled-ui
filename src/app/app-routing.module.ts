import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',     component: LoginComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: '**',        redirectTo: '/login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule   // <-- túto export sekciu musíš mať
  ]
})
export class AppRoutingModule { }
