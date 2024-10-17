import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule],
          selector: 'stock-products',
          template: `
                    <div class="stock-product" [formGroup]="parent">
                    </div>
          `,
          styleUrl: './stock-products.component.scss'
})

export class StockProductsComponent  {
          @Input() 
          parent: FormGroup = new FormGroup({});
}