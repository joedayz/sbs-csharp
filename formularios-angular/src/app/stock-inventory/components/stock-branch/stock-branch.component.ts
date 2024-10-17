import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
          standalone: true,
          imports: [CommonModule, ReactiveFormsModule],
          selector: 'stock-branch',
          template: `
                    <div [formGroup]="parent">
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
                    </div>
          `,
          styleUrl: './stock-branch.component.scss'
})

export class StockBranchComponent  {
    @Input() 
    parent: FormGroup = new FormGroup({});
}