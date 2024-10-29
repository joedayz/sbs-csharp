import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {MatToolbar} from '@angular/material/toolbar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {ReservationsService} from '../services/reservations.service';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';
import {Reservation} from '../models/reservation.model';
import {catchError, of, tap} from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    MatToolbar,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  username: any;
  token: any;
  serialNo = 0;
  dataSource: any;
  reservations: Array<Reservation> = [];
  noReservation = false;
  displayedColumns: string[] = ['Id', 'Room Id', 'CheckInDate', 'CheckOutDate'];

  constructor(
    private reservationsService: ReservationsService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = localStorage.getItem('userId');
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    if (!this.token) {
      window.alert("You need to be logged in to view this page");
      this.router.navigate(['/login']);
    } else {
      this.reservationsService.getReservationsOfLoggedInUser(this.token)
        .pipe(
          tap((response: any) => {
            for (let res of response) {
              this.serialNo += 1;
              this.reservations.push({
                Id: this.serialNo,
                CheckInDate: res.checkInDate,
                CheckOutDate: res.checkOutDate,
                RoomId: res.roomId,
                Bill: res.bill,
                UserId: res.userId,
              });
            }
            this.dataSource = this.reservations;
          }),
          catchError((error) => {
            if (error.error === null) {
              window.alert("Please login to view your dashboard");
            } else {
              window.alert(error.error);
            }
            return of(null);
          })
        )
        .subscribe();

      this.usersService.getUser(this.id)
        .pipe(
          tap((response) => {
            this.username = response;
          }),
          catchError((error) => {
            window.alert(error.error || "An error occurred while fetching user data.");
            return of(null); // Devuelve un valor vacío para evitar romper el flujo.
          })
        )
        .subscribe();


    }

  }
}
