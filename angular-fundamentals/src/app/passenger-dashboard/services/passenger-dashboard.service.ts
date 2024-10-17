import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Passenger } from '../models/passenger.interface';
import { Observable } from 'rxjs';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
}
        
@Injectable({
          providedIn: 'root',
        })
export class PassengerDashboardService {
          constructor(private httpClient: HttpClient) { }
          
          getPassengers(): Observable<Passenger[]>{
                    return this.httpClient.get<Passenger[]>(PASSENGER_API);
          }

          getPassenger(id: number): Observable<Passenger> {
                    return this.httpClient.get<Passenger>(`${PASSENGER_API}/${id}`);
          }
          removePassenger(passenger: Passenger): Observable<Passenger> {
                    return this.httpClient.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`, httpOptions);
          }
          updatePassenger(passenger: Passenger): Observable<Passenger> {
                    return this.httpClient.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, httpOptions);
          }

}