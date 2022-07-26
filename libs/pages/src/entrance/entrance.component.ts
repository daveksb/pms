import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@pms/shared';
import { Router } from '@angular/router';
import { VehicleInfoComponent } from '@pms/form';

@Component({
  selector: 'pms-gate',
  standalone: true,
  imports: [CommonModule, VehicleInfoComponent],
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
})
export class EntranceComponent {
  constructor(private service: AppService, private router: Router) {}

  addNewVehicle() {
    this.service.addVehicle().subscribe(() => {
      //console.log('add vehicle result = ', res);
    });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
