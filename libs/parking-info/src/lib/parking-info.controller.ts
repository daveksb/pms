import { Controller, Get } from '@nestjs/common';
import { ParkingInfo } from '@pms/shared';
import { ParkingInfoService } from './parking-info.service';

@Controller('parking-info')
export class ParkingInfoController {
  constructor(private service: ParkingInfoService) {}

  @Get()
  findAll(): ParkingInfo[] {
    return this.service.getParkingInfo();
  }
}
