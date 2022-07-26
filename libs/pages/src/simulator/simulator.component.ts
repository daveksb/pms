import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@pms/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-simulator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
})
export class SimulatorComponent {
  constructor(private service: AppService, private router: Router) {}

  addNewVehicle() {
    this.service.addVehicle().subscribe(() => {
      //console.log('add vehicle result = ', res);
    });
  }

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
