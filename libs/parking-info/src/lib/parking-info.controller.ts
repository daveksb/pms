import { Controller, Get, Sse, MessageEvent, Post } from '@nestjs/common';
import { ParkingInfo } from '@pms/shared';
import { interval, map, Observable, take } from 'rxjs';
import { ParkingInfoService } from './parking-info.service';

@Controller('parking-info')
export class ParkingInfoController {
  constructor(private service: ParkingInfoService) {}

  @Get()
  findAll(): ParkingInfo[] {
    return this.service.getParkingInfos();
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    //return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    return interval(10000).pipe(
      map((_) => ({ data: this.service.getParkingInfo() }))
    );
  }
}
