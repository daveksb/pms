import { Controller, Get, Sse, MessageEvent, Post } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { ParkingInfo } from '@pms/shared';
import { Observable, Subject } from 'rxjs';
import { ParkingInfoService } from './parking-info.service';

@Controller('parking-info')
export class ParkingInfoController {
  constructor(
    private service: ParkingInfoService,
    private eventEmitter: EventEmitter2
  ) {
    this.vehicleStatus.subscribe((res) =>
      console.log('vehicle status = ', res)
    );
  }

  vehicleStatus = new Subject<MessageEvent>();

  @Get()
  findAll(): ParkingInfo[] {
    return this.service.getParkingInfos();
  }

  @Post('remove')
  remove(): string {
    this.eventEmitter.emit('vehicle.exit', {
      data: {
        eventType: 'Exit',
        exitTime: new Date(),
      },
    });
    return 'This action remove a vehicle';
  }

  @Post('add')
  create(): string {
    this.eventEmitter.emit('vehicle.added', {
      data: {
        eventType: 'Enter',
        position: Math.floor(Math.random() * 999),
        licensePlate: `${Math.floor(Math.random() * 9)} กษ ${Math.floor(
          Math.random() * 9999
        )}`,
        arrive: `12.${Math.floor(Math.random() * 59)}`,
        vehicleType: 'รถยนต์นั่ง',
      },
    });
    return 'This action adds a new vehicle';
  }

  @OnEvent('vehicle.added', { async: true })
  handleAdd(payload: any) {
    //console.log('add vehicle payload = ', payload);
    this.vehicleStatus.next(payload);
  }

  @OnEvent('vehicle.exit', { async: true })
  handleExit(payload: any) {
    //console.log('remove vehicle =', payload);
    this.vehicleStatus.next(payload);
  }

  @Sse('streaming')
  sse(): Observable<MessageEvent> {
    //console.log('inside sse = ');
    return this.vehicleStatus.asObservable();
  }
}
