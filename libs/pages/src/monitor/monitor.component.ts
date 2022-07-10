import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MonitorService } from './monitor.service';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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

  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private service: MonitorService) {}

  ngOnInit(): void {
    this.service
      .getServerSentEvent('http://localhost:3333/api/parking-info/streaming')
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        console.log('resxx = ', res);
        this.dataSource.data = [...this.dataSource.data, res];
      });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
