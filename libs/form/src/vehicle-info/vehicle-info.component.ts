import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pms-vehicle-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss'],
})
export class VehicleInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
