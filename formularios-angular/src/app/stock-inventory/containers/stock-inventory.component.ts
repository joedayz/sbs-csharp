import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {StockBranchComponent} from '../components/stock-branch/stock-branch.component';
import {StockProductsComponent} from '../components/stock-products/stock-products.component';
import {StockSelectorComponent} from '../components/stock-selector/stock-selector.component';
import {Product} from '../models/product.interface';
import {StockInventoryService} from '../services/stock-inventory.service';
import {forkJoin} from 'rxjs';

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
          [products]="products"
          (added)="addStock($event)">
        </stock-selector>

        <stock-products [parent]="form"
                        (removed)="removeStock($event)">
        </stock-products>


        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">
            Order Stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `
})

export class StockInventoryComponent implements OnInit {

  products: Product[] = [];

  form: FormGroup;

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();


    forkJoin({cart, products})
      .subscribe(({cart, products}) => {
        console.log(cart, products);
      });
  }

  constructor(private fb: FormBuilder, private stockService: StockInventoryService) {

    this.form = this.fb.group({
      store: this.fb.group({
        branch: '',
        code: ''
      }),
      selector: this.createStock({}),
      stock: this.fb.array([])

    });

  }


  createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10,
    });
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }

  addStock(stock: any) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({group, index}: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }


}
