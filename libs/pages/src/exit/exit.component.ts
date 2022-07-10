import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@pms/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-exit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
})
export class ExitComponent {
  constructor(private service: AppService, private router: Router) {}

  removeVehicle() {
    /*     const data = Math.floor(Math.random() * 999);
    this.service._carExitSubj.next(data); */

    this.service.removeVehicle().subscribe((res) => {
      console.log('add vehicle result = ', res);
    });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
