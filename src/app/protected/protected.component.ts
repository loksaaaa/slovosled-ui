import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  content = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.auth.getProtectedData().subscribe(
        data => this.content = data,
        ()   => this.router.navigate(['/login'])
      );
    }
  }
}
