// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  // Pripojí sa na /login endpoint a vráti token
  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.api}/login`, { username, password })
      .pipe(
        tap(res => localStorage.setItem('jwt', res.token))  // uložíme token do localStorage
      );
  }

  // Získame token zo localStorage
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  // Odhlásenie (vymazanie tokenu)
  logout() {
    localStorage.removeItem('jwt');
  }

  // Skontrolujeme, či je používateľ prihlásený
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
