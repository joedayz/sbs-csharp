import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'stock-products',
  template: `
    <div class="stock-product" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index;">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.name }}
            </div>
            <div class="stock-product__price">
              {{ getProduct(item.value.product_id)?.price | currency:'USD':true }}
            </div>
            <input type="number"
                   step="10"
                   min="10"
                   max="1000"
                   formControlName="quantity"
                   placeholder="Quantity"/>
            <button type="button" (click)="onRemove(item, i)">
              Remove
            </button>
          </div>

        </div>
      </div>
    </div>
  `,
  styleUrl: './stock-products.component.scss'
})

export class StockProductsComponent {
  @Input()
  parent: FormGroup = new FormGroup({});

  @Input()
  map: Map<number, Product> = new Map<number, Product>();

  @Output()
  removed = new EventEmitter<any>();

  getProduct(id:number): Product | undefined{
    console.log("id: ", id);
    console.log("this.map: ", this.map);
    console.log("this.map.get(id): ", this.map.get(id));
    return this.map.get(id);
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group: any, index: any) {
    this.removed.emit({group, index});
  }
}
