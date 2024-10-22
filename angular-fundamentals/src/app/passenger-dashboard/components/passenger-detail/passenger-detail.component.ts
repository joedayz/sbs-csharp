import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { CommonModule } from '@angular/common';

@Component({
          standalone: true,
          imports: [CommonModule],
          selector: 'passenger-detail',
          template: `
          <div>
                    <span class="status" [class.checked-in]="detail.checkedIn"></span>      
                    <div *ngIf="editing">
                              <input
                                        type="text"
                                        [value]="detail.fullname"
                                        (input)="onNameChange(name.value)"
                                        #name>
                    </div>
                    <div *ngIf="!editing">
                    {{ detail.fullname }}
                    </div>
                    <div class="date">
                    Check in date:
                    {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
                    </div>
                    <div class="children">
                    Children: {{ detail.children?.length || 0 }}
                    </div>     
                    <button (click)="toggleEdit()">
                    {{ editing ? 'Done' : 'Edit' }}
                    </button>
                    <button (click)="onRemove()">
                    Remove
                    </button>               
          </div>
          `,
          styleUrl: './passenger-detail.component.scss'     
})

export class PassengerDetailComponent  {



          @Input()
          detail: Passenger = {} as Passenger;

          editing: boolean = false;

          @Output()
          edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

          @Output()
          remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

          onNameChange(value: string) {
                    this.detail.fullname = value;
          }

          onRemove() {
                    this.remove.emit(this.detail);
          
          }

          toggleEdit() {
                    if (this.editing) {
                              this.edit.emit(this.detail);
                    }
                    this.editing = !this.editing;
          }

}