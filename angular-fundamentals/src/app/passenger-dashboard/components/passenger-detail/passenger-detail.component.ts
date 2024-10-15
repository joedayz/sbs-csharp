import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [],
          selector: 'passenger-detail',
          template: `
          <h1>Passenger Detail Component</h1>
          `
})

export class PassengerDetailComponent implements OnInit {
          constructor() { }

          ngOnInit() { }
}