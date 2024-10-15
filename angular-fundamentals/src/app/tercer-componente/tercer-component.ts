import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [],
          selector: 'tercer-componente',
          template: `
                    <div class="app">
                              <button (click)="handleClick()">Change name</button>

                              <input type="text" 
                                        [value]="name"
                                        (input)="handleInput($event)"
                                        (blur)="handleBlur($event)">
                                        
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

          handleBlur(event: any) {
                    this.name = event.target.value;
          }
          handleInput(event: any) {
                    this.name = event.target.value;
          }
}