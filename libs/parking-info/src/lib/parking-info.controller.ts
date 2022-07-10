import { Controller, Get, Sse, MessageEvent, Post } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { ParkingInfo } from '@pms/shared';
import { Observable, of, Subject, take } from 'rxjs';
import { ParkingInfoService } from './parking-info.service';

@Controller('parking-info')
export class ParkingInfoController {
  constructor(
    private service: ParkingInfoService,
    private eventEmitter: EventEmitter2
  ) {
    this.events.subscribe((res) => console.log('subject = ', res));
  }

  events = new Subject<MessageEvent>();

  @Get()
  findAll(): ParkingInfo[] {
    return this.service.getParkingInfos();
  }

  @Post()
  create(): string {
    this.eventEmitter.emit('vehicle.added', {
      data: {
        position: Math.floor(Math.random() * 999),
        licensePlate: `${Math.floor(Math.random() * 9)} กษ ${Math.floor(
          Math.random() * 9999
        )}`,
        arrive: `12.${Math.floor(Math.random() * 59)}`,
        vehicleType: 'รถยนต์นั่ง',
      },
    });
    return 'This action adds a new cat';
  }

  @OnEvent('vehicle.added', { async: true })
  handleEvent(payload: any) {
    //console.log('add vehicle payload = ', payload);
    this.events.next(payload);
  }

  @Sse('streaming')
  sse(): Observable<MessageEvent> {
    console.log('inside sse = ');
    return this.events.asObservable();
  }
}
