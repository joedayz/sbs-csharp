import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
          standalone: true,
          imports: [FormsModule],
          selector: 'tercer-componente',
          template: `
                    <div class="app">
                              <button (click)="handleClick()">Change name</button>

                              <!-- <input type="text" 
                                        [value]="name"
                                        (input)="handleInput($event)"
                                        (blur)="handleBlur($event)"> -->
                              
                                        <input
                                                  type="text"
                                                  [ngModel]="name"
                                                  (ngModelChange)="handleChange($event)">                                        
                              <input type="text" [(ngModel)]="name">

                                        
                              <div>{{ name }}
                    </div>
          
          `
})
// Eventos
export class TercerComponent implements OnInit {




          name: string = 'Jose';

          constructor() { }

          ngOnInit() { }

          handleClick() {
                    this.name = 'Amadeo';
          }

          handleChange(value: any) {
                    this.name = value;
          }


}