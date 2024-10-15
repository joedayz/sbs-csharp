import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [CommonModule],
          selector: 'quinto-componente',
          template: `
          <div class="app">
          <input
        type="text"
        [value]="name"
        (input)="handleChange($event)">
          </div>

          <ng-template [ngIf]="name.length > 3">
                    <div>
                              Searching for... {{ name }}
                    </div>
          </ng-template>

          <div *ngIf="name.length > 3">
                    Searching for ...{{ name }}
          </div>
          
          `
})

export class QuintoComponent {


          name: string = 'Amadeo';

          handleChange(event: any) {
                    this.name = event.target.value;
          }
}