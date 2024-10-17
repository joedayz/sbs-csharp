import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule],
          selector: 'stock-selector',
          template: `
                    <div class="stock-selector" [formGroup]="parent">
                    </div>
          `,
          styleUrl: './stock-selector.component.scss'
})

export class StockSelectorComponent  {
          @Input() 
          parent: FormGroup = new FormGroup({});
}