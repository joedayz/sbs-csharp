import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Passenger {
          id: number,
          fullname: string,
          checkedIn: boolean
}

@Component({
          standalone: true,
          imports: [CommonModule],
          selector: 'sexto-componente',
          template: `
          <div class="app">
                    <h3>Airline Passengers</h3>
                    <ul>
                              <li *ngFor="let passenger of passengers; let i = index;">
                              <span
                                        class="status"
                                        [ngClass]="{
                                        'checked-in': passenger.checkedIn,
                                        'checked-out': !passenger.checkedIn
                                        }"></span>
                                        {{ i }}: {{ passenger.fullname }}
                              </li>
                              <!-- <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
                                        <li>{{ i }}: {{ passenger.fullname }}</li>
                              </ng-template> -->
                    </ul>



          </div>
          
          `,
          styleUrl: './sexto.component.scss'
})

export class SextoComponent {

          passengers: Passenger[] = [{
                    id: 1,
                    fullname: 'Stephen',
                    checkedIn: true
          }, {
                    id: 2,
                    fullname: 'Rose',
                    checkedIn: false
          }, {
                    id: 3,
                    fullname: 'James',
                    checkedIn: true
          }, {
                    id: 4,
                    fullname: 'Louise',
                    checkedIn: true
          }, {
                    id: 5,
                    fullname: 'Tina',
                    checkedIn: false
          }];
}