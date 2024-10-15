import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SegundoComponent } from "./segundo-componente/segundo.component";
import { TercerComponent } from './tercer-componente/tercer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TercerComponent],
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
  <tercer-componente></tercer-componente>
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
