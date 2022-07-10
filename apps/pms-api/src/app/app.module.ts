import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ParkingInfoModule } from '@pms/parking-info';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ParkingInfoModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
