import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [],
          selector: 'cuarto-componente',
          template: `
          <div class="app">
          <button (click)="handleClick(username.value)">Click me!</button>
          <input type="text" #username>
          <div>{{ name }}</div>
          </div>
          `
})

export class CuartoComponent {
          name: string = 'Amadeo';
          handleClick(value: string) {
                    console.log(value);
          }
}