import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard.component';
import { NotFoundComponent } from './not-found.component';
import { PassengerViewerComponent } from './passenger-dashboard/components/passenger-viewer/passenger-viewer.component';

export const routes: Routes = [
          {path: '', component: HomeComponent, pathMatch: 'full'},
          {
                    path: 'passengers',
                    children: [
                              { path: '', component: PassengerDashboardComponent },
                              { path: ':id', component: PassengerViewerComponent }
                            ]
          },
          {path: '**', component: NotFoundComponent}
];
