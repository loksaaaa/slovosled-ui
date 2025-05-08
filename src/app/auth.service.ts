// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { map }          from 'rxjs/operators';
import { Observable }   from 'rxjs';

interface LoginResponse { token: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http
      .post<LoginResponse>('/api/public/auth/login', { username, password })
      .pipe(
        map(resp => resp.token)           // <— teraz login() vracia Observable<string>
      );
  }

  // pridáme metódu getProtectedData():
  getProtectedData(): Observable<string> {
    return this.http.get<string>('/api/protected/data');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

    // ← pridávame túto metódu:
    getToken(): string | null {
      return localStorage.getItem('jwt');
    }
}
