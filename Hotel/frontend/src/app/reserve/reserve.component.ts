import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  imports: [
    NavbarComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatButton
  ],
  standalone: true
})
export class ReserveComponent implements OnInit {
  // Task 13: Delcare variables here

  constructor(
    // Task 13: declare private instances here

  ) {}

  ngOnInit(): void {
    // Task 13: Declare form and store values

  }

  // Task 13: Add getAvailableRooms() function here

  // Task 13: Add roomAvailable() function here

  // Task 13: Add close() function here

  // Task 13: Add confirmReserve() method here

}
