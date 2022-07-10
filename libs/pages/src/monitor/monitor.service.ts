import { Injectable, NgZone } from '@angular/core';
import { ParkingInfo } from '@pms/shared';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  constructor(private http: HttpClient, private _zone: NgZone) {}

  //eventSource = new EventSource('http://localhost:3333/api/parking-info/sse');

  getData(): Observable<ParkingInfo[]> {
    return this.http.get<ParkingInfo[]>(
      'http://localhost:3333/api/parking-info',
      {}
    );
  }

  addVehicle(): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3333/api/parking-info',
      {},
      httpOptions
    );
  }

  getServerSentEvent(url: string): Observable<MessageEvent> {
    return new Observable((observer: any) => {
      const eventSource = this.getEventSource(url);

      eventSource.onmessage = (event: MessageEvent<ParkingInfo>) => {
        this._zone.run(() => {
          observer.next(event.data);
        });
      };

      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
