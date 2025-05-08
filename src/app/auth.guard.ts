import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Importuj AuthService na overenie tokenu

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    // Skontrolujeme, či je používateľ prihlásený (či má platný token)
    if (this.authService.isLoggedIn()) {
      return true; // Ak je prihlásený, povolíme prístup
    } else {
      this.router.navigate(['/login']); // Inak presmerujeme na login
      return false;
    }
  }
}
