import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorService } from '../monitor/monitor.service';

@Component({
  selector: 'pms-gate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
})
export class EntranceComponent {
  constructor(private service: MonitorService) {}

  addNewVehicle() {
    this.service.addVehicle().subscribe((res) => {
      console.log('add vehicle result = ', res);
    });
  }
}
