import {Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {UsersService} from '../services/users.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    MatButton,
    NgIf
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  get isLoggedIn():boolean{
    return localStorage.getItem('token') !== null;
  }

  logout() {
    this.usersService.logout();
    this.router.navigate(['/']);
  }

}
