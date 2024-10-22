import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [],
          selector: 'segundo-componente',
          template: `
                    <div class="app">
                    <h1 [innerHTML]="title"></h1>
                    <h1>{{ title }}</h1>
                    <img [src]="logo" alt="Logo">
                    <input type="text" [value]="name">
                    </div>
          
          `
})
// Binding de Propiedades
export class SegundoComponent  { 

          title: string = '';
          name: string = 'Jose';
          logo: string = 'images/logo.png';

          constructor() {
                    this.title = 'Curso Angular';
          }

}