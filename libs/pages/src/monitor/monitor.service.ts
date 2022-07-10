import { Injectable } from '@angular/core';
import { ParkingInfo } from '@pms/shared';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ParkingInfo[]> {
    return this.http.get<ParkingInfo[]>(
      'http://localhost:3333/api/parking-info',
      {}
    );
  }
}
