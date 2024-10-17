import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockInventoryComponent } from "./stock-inventory/containers/stock-inventory.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StockInventoryComponent],
  template: `
    <div class="app">
      <stock-inventory></stock-inventory>
    </div>  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
