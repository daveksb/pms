import { Injectable } from '@nestjs/common';
import { ParkingInfo } from '@pms/shared';

const data: ParkingInfo[] = [
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
@Injectable()
export class ParkingInfoService {
  getParkingInfos(): ParkingInfo[] {
    return data;
  }

  getParkingInfo(): ParkingInfo {
    return data[0];
  }
}
