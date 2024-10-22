import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { PassengerDashboardComponent } from "./passenger-dashboard/containers/passenger-dashboard.component";
import { CommonModule } from '@angular/common';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,  RouterLinkActive, PassengerDashboardComponent],
  template:`
    <div class="app">
      <nav class="nav">
        <a *ngFor="let item of nav"
           [routerLink]="item.link"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name}}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];

}
