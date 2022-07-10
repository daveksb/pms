import { Module } from '@nestjs/common';
import { ParkingInfoController } from './parking-info.controller';
import { ParkingInfoService } from './parking-info.service';

@Module({
  controllers: [ParkingInfoController],
  providers: [ParkingInfoService],
  exports: [ParkingInfoService],
})
export class ParkingInfoModule {}
