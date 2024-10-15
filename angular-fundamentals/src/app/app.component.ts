import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SextoComponent } from './sexto-componente/sexto.component';
//import { CuartoComponent } from "./cuarto-componente/cuarto.component";
//import { QuintoComponent } from "./quinto-componente/quinto.component";
//import { SegundoComponent } from "./segundo-componente/segundo.component";
//import { TercerComponent } from './tercer-componente/tercer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SextoComponent],
  template:
    `
  <div class="app">
  
  <!--
  {{ title }}
  <div>
    {{ numberOne + numberTwo }}
  </div>
  <div>
    {{ isHappy ? ':)' : ':(' }}
    </div>
  </div>
  -->
  <sexto-componente></sexto-componente>
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
