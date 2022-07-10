import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@pms/shared';

@Component({
  selector: 'pms-exit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
})
export class ExitComponent {
  constructor(private service: AppService) {}

  removeVehicle() {
    const data = Math.floor(Math.random() * 999);

    this.service._carExitSubj.next(data);
  }
}
