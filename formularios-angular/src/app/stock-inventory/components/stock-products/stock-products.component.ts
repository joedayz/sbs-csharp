import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';

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
              {{ item.value.product_id }}
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

  @Output()
  removed = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group: any, index: any) {
    this.removed.emit({group, index});
  }
}
