import { Injectable, NgZone } from '@angular/core';
import { ParkingInfo } from './interface';
import { BehaviorSubject, Observable } from 'rxjs';
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
export class AppService {
  _carExitSubj = new BehaviorSubject({});

  constructor(private http: HttpClient, private _zone: NgZone) {}

  getData(): Observable<ParkingInfo[]> {
    return this.http.get<ParkingInfo[]>(
      'http://localhost:3333/api/parking-info'
    );
  }

  addVehicle(): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3333/api/parking-info/add',
      {},
      httpOptions
    );
  }

  removeVehicle(): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3333/api/parking-info/remove',
      {},
      httpOptions
    );
  }

  getServerSentEvent(url: string): Observable<any> {
    return new Observable((observer: any) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event: MessageEvent<string>) => {
        const res = JSON.parse(event.data);

        this._zone.run(() => {
          observer.next(res);
        });
      };

      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
}
