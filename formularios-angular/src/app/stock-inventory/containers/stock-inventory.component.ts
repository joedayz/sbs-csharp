import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from '../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../components/stock-selector/stock-selector.component';
import { Product } from '../models/product.interface';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule, StockBranchComponent, StockProductsComponent, StockSelectorComponent],
          selector: 'stock-inventory',
          template: `
                    <div class="stock-inventory">
                              <form [formGroup]="form" (ngSubmit)="onSubmit()">
                                        
                                        <stock-branch [parent]="form">
                                        </stock-branch>

                                        <stock-selector 
                                                  [parent]="form"
                                                  [products]="products">
                                        </stock-selector>

                                        <stock-products [parent]="form">
                                        </stock-products>
                                        

                                        <div class = "stock-inventory__buttons">
                                                  <button type="submit" [disabled]="form.invalid">
                                                            Order Stock
                                                  </button>
                                        </div>

                                        <pre>{{  form.value | json }}</pre>
                              </form>
                    </div>
          `
})

export class StockInventoryComponent {

          products: Product[] = [
                    { "id": 1, "price": 2800, "name": "MacBook Pro" },
                    { "id": 2, "price": 50, "name": "USB-C Adaptor" },
                    { "id": 3, "price": 400, "name": "iPhone" },
                    { "id": 4, "price": 900, "name": "iPad" },
                    { "id": 5, "price": 600, "name": "Apple Watch "},
                   

          ];


          form = new FormGroup({
                    store: new FormGroup({
                              branch: new FormControl(''),
                              code: new FormControl('')
                    }),
                    selector: new FormGroup({
                              product_id: new FormControl(''),
                              quantity: new FormControl(10)
                    }),
                    stock: new FormArray([])
                    
          });


          onSubmit() {
                    console.log('Submit:', this.form.value);
          }

}