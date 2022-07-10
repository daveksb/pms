import { Injectable } from '@angular/core';
import { ParkingInfo } from '@pms/shared';
import { Observable, of } from 'rxjs';

const ELEMENT_DATA: ParkingInfo[] = [
  {
    position: 1,
    licensePlate: '4 กษ 2541',
    arrive: '12.05',
    vehicleType: 'รถยนต์นั่ง',
  },
  {
    position: 2,
    licensePlate: '6 ขจ 4079',
    arrive: '12.38',
    vehicleType: 'รถยนต์นั่ง',
  },
  {
    position: 3,
    licensePlate: '1 พศ 9601',
    arrive: '13.40',
    vehicleType: 'รถกระบะ',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  constructor() {}

  getData(): Observable<ParkingInfo[]> {
    return of(ELEMENT_DATA);
  }
}
