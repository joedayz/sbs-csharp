import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule],
          selector: 'stock-selector',
          template: `
                    <div class="stock-selector" [formGroup]="parent">
                              <div formGroupName="selector">
                                        <select formControlName="product_id">
                                                 <option value=""> Select Stock</option>
                                                  <option *ngFor="let product of products" [value]="product.id">
                                                            {{ product.name }}
                                                  </option>
                                        </select>
                                        <input type="number" 
                                        step="10"
                                        min="10"
                                        max="1000"
                                        formControlName="quantity" 
                                        placeholder="Quantity" />
                                        <button type="button">
                                                  Add Stock
                                        </button>
                              </div>
                    </div>
          `,
          styleUrl: './stock-selector.component.scss'
})

export class StockSelectorComponent  {
          @Input() 
          parent: FormGroup = new FormGroup({});

          @Input()
          products: Product[] = [];
}