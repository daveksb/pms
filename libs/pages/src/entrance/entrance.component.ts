import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@pms/shared';
import { Router } from '@angular/router';
import { VehicleInfoComponent } from '@pms/form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'pms-gate',
  standalone: true,
  imports: [CommonModule, VehicleInfoComponent],
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
})
export class EntranceComponent implements OnInit {
  frontImage = '';
  bottomImage = '';
  licensePlate = '';
  constructor(private service: AppService, private router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.service
      .getServerSentEvent('http://localhost:3333/api/parking-info/streaming')
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        const temp = Math.floor(Math.random() * 6);
        console.log('res = ', res);
        this.frontImage = `./assets/front/${temp}.jpg`;
        this.bottomImage = `./assets/bottom/${temp}.jpg`;
      });
  }
}
