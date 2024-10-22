import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {StockBranchComponent} from '../components/stock-branch/stock-branch.component';
import {StockProductsComponent} from '../components/stock-products/stock-products.component';
import {StockSelectorComponent} from '../components/stock-selector/stock-selector.component';
import {Item, Product} from '../models/product.interface';
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
                        [map]="productMap"
                        (removed)="removeStock($event)">
        </stock-products>


        <div class="stock-inventory__price">
          Total: {{ total | currency:'USD':true }}
        </div>


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

  total: number = 0;

  productMap: Map<number, Product> = new Map<number, Product>();

  form: FormGroup;

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    forkJoin({ cart, products }).subscribe(({ cart, products }) => {
      // Verifica que los productos tienen id válidos
      const myMap = products.map<[number, Product]>(product => [Number(product.id), product]);

      // Crea el Map a partir del array de tuplas
      this.productMap = new Map<number, Product>(myMap);

      // Asegúrate de que se asignan correctamente los productos
      this.products = products;

      // Agrega los ítems del carrito al stock
      cart.forEach(item => this.addStock(item));


      this.calculeTotal(this.form.get('stock')?.value);
      this.form.get('stock')?.valueChanges.subscribe(
        value => this.calculeTotal(value));

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

  private calculeTotal(value: Item[]) {
    const total = value.reduce( (prev, next) => {
      return prev + (next.quantity * this.productMap.get(next.product_id).price);
    }, 0);
    this.total = total;
  }
}
