import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule],
          selector: 'stock-inventory',
          template: `
                    <div class="stock-inventory">
                              <form [formGroup]="form" (ngSubmit)="onSubmit()">
                                        <div formGroupName="store">
                                                  <input formControlName="branch" 
                                                  id="branch" 
                                                  type="text" 
                                                  placeholder="Branch ID" />
                                                  <input formControlName="code" 
                                                  id="code" 
                                                  type="text" 
                                                  placeholder="Manager Code" />
                                        </div>
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

          form = new FormGroup({
                    store: new FormGroup({
                              branch: new FormControl(''),
                              code: new FormControl('')
                    }),
                    
          });


          onSubmit() {
                    console.log('Submit:', this.form.value);
          }

}