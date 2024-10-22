import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../services/passenger-dashboard.service";
import {PassengerFormComponent} from "../passenger-form/passenger-form.component";


@Component({
  selector: 'passenger-viewer',
  standalone: true,
  imports: [
    PassengerFormComponent
  ],
  template: `

    <div>
      <passenger-form
        [detail]="passenger" (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>


  `
})

export class PassengerViewerComponent implements OnInit {

  passenger: Passenger | undefined;

  constructor(private passengerService: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengerService.getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) =>
      Object.assign({}, this.passenger, event));
  }
}
