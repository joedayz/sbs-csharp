import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Task 12: Add variables here

  constructor(
    // Task 12: Declare private instances here

  ){
  }

  ngOnInit(): void {
    // Task 12: Add reservations and user logic here

  }
}
