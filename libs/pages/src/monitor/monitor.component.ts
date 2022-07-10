import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BillingComponent } from '@pms/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppService } from '@pms/shared';

@UntilDestroy()
@Component({
  selector: 'pms-monitor',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDialogModule],
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

  constructor(
    private router: Router,
    private service: AppService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service
      .getServerSentEvent('http://localhost:3333/api/parking-info/streaming')
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log('res = ', res);
        this.dataSource.data = [...this.dataSource.data, res];
      });

    this.service._carExitSubj.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('moniter subj = ', res);
      //this.ref.markForCheck();
    });
  }

  openDialog() {
    this.dialog.open(BillingComponent, {
      data: {
        ticketId: '123',
      },
    });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
