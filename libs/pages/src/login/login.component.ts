import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['monitor']);
  }

  entrance() {
    this.router.navigate(['entrance']);
  }

  exit() {
    this.router.navigate(['exit']);
  }
}
