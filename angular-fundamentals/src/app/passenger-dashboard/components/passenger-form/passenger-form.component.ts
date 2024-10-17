import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {FormsModule} from "@angular/forms";
import {Baggage} from "../../models/baggage.interface";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'passenger-form',
  template: `

    <form (ngSubmit)="handleSubmit(form.value, form.valid)"
          #form="ngForm" novalidate>

      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname">
        <div *ngIf="fullname.errors?.['required'] && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
        <div *ngIf="id.errors?.['required'] && id.dirty" class="error">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.['checkedIn']"
            (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>


      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>

      <div>
        Luggage:
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>


      <button type="submit" [disabled]="form.invalid">
        Update passenger
      </button>


    </form>

  `,
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class PassengerFormComponent implements OnInit{

  @Input()
  detail: Passenger | null | undefined;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  },{
    key: 'hand-only',
    value: 'Hand baggage'
  },{
    key: 'hold-only',
    value: 'Hold baggage'
  },{
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];


  constructor(){

  }

  ngOnInit() {
  }


  handleSubmit(passenger: Passenger, isValid: boolean | null) {
    if(isValid){
      this.update.emit(passenger);
    }
  }

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn){
      // @ts-ignore
      this.detail.checkInDate = Date.now();
    }
  }
}
