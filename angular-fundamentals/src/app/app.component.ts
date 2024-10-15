import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuartoComponent } from "./cuarto-componente/cuarto.component";
//import { SegundoComponent } from "./segundo-componente/segundo.component";
//import { TercerComponent } from './tercer-componente/tercer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CuartoComponent],
  template:
    `
  <div class="app">
  {{ title }}
  <div>
    {{ numberOne + numberTwo }}
  </div>
  <div>
    {{ isHappy ? ':)' : ':(' }}
    </div>
  </div>
  <cuarto-componente></cuarto-componente>
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
