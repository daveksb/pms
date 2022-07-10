import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MonitorService } from './monitor.service';
import { ParkingInfo } from '@pms/shared';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'pms-monitor',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
})
export class MonitorComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'licensePlate',
    'arrive',
    'vehicleType',
  ];

  dataSource = new MatTableDataSource<ParkingInfo>();

  constructor(private router: Router, private service: MonitorService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
