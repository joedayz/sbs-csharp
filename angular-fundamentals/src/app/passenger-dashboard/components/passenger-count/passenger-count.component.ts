import { Component, OnInit } from '@angular/core';

@Component({
          standalone: true,
          imports: [],
          selector: 'passenger-count',
          template: `
                    <h1>Passenger Count</h1>
          `
})

export class PassengerCountComponent implements OnInit {
          constructor() { }

          ngOnInit() { }
}