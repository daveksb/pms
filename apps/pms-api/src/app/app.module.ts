import { Module } from '@nestjs/common';
import { ParkingInfoModule } from '@pms/parking-info';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ParkingInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
