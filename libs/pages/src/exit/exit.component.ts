import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorService } from '../monitor/monitor.service';

@Component({
  selector: 'pms-exit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
})
export class ExitComponent {
  constructor(private service: MonitorService) {}

  addNewVehicle() {
    this.service.addVehicle().subscribe((res) => {
      console.log('add vehicle result = ', res);
    });
  }
}
