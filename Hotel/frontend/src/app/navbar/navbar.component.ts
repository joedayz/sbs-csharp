import {Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    MatButton
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Task 11: Declare variables instances here


  constructor(
    // Task 11: Add private instances here

  ) {
  }

  ngOnInit(): void {

  }
  // Task 11: Add logout() function

}
