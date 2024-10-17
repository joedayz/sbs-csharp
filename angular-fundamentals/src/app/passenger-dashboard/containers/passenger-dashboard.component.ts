import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/passenger.interface';
import { PassengerCountComponent } from "../components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "../components/passenger-detail/passenger-detail.component";
import { PassengerDashboardService } from '../services/passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
          standalone: true,
          imports: [CommonModule, HttpClientModule,  PassengerCountComponent, PassengerDetailComponent],
          selector: 'passenger-dashboard',
          template: `
          <div class="app">
          
          <passenger-count [items]="passengers"></passenger-count>
          <passenger-detail *ngFor="let passenger of passengers;" 
                    [detail]="passenger" 
                    (edit)="handleEdit($event)"
                    (remove)="handleRemove($event)"></passenger-detail>
          </div>
          `
})

export class PassengerDashboardComponent implements OnInit {

          
          passengers: Passenger[] = [];
    
          constructor(private passengerService: PassengerDashboardService) {
          }
        
      
          ngOnInit(): void {
                    
              console.log('ngOnInit...');
              this.passengers = this.passengerService.getPassengers();
              
          }

          handleRemove(event: Passenger) {
                    this.passengers = this.passengers.filter((passenger: Passenger) => {
                              return passenger.id !== event.id;
                            });
          }
          
          handleEdit(event: Passenger) {
                    this.passengers = this.passengers.map((passenger: Passenger) => {
                              if (passenger.id === event.id) {
                                debugger;
                                passenger = Object.assign({}, passenger, event);
                              }
                        
                              return passenger;
                            });
          }
}