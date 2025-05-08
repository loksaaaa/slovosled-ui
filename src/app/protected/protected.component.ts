// src/app/protected/protected.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../auth.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html'
})
export class ProtectedComponent implements OnInit {
  content = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.auth.getProtectedData().subscribe(
      (data: string) => this.content = data,     // explicitný typ
      ()             => this.router.navigate(['/login'])
    );
  }
}
