import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PassengerDashboardComponent } from "./passenger-dashboard/containers/passenger-dashboard.component";
//import { SextoComponent } from './sexto-componente/sexto.component';
//import { CuartoComponent } from "./cuarto-componente/cuarto.component";
//import { QuintoComponent } from "./quinto-componente/quinto.component";
//import { SegundoComponent } from "./segundo-componente/segundo.component";
//import { TercerComponent } from './tercer-componente/tercer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PassengerDashboardComponent],
  template:
    `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;

  constructor() {
    this.title = 'Hello World';
  }

}
