import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {Room} from '../models/room.model';
import {UsersService} from '../services/users.service';
import {ReservationsService} from '../services/reservations.service';
import {Router} from '@angular/router';
import {catchError, of, tap} from 'rxjs';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  imports: [
    NavbarComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatButton,
    NgIf,
    MatToolbar,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    NgForOf,
    MatCardImage
  ],
  standalone: true
})
export class ReserveComponent implements OnInit {
  reserveForm!: FormGroup;
  //Parameter to show the complete reserve page to only logged-in users
  showPage = true;
  // Parameter to show the invoice if book now is clicked
  showInvoice = false;

  ratePerNight : number = 0;
  taxes = 0;
  totalRoomCost = 0;
  capacity!:number;
  totalNights :any;
  totalBill =0;
  type!:string
  extraCharges = 0;
  roomNo = 0;
  token:any;
  userid:any;
  checkin:any;
  checkout:any;
  availableRooms:Array<Room>= [];

  constructor(
    private usersService: UsersService,
    private reservationsService: ReservationsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(!this.token){
      this.showPage = false;
      window.alert("Please login to reserve a room");
      this.router.navigate(['/login']);
    }
    this.userid = Number(localStorage.getItem('userId'));
    console.log(localStorage.getItem('token'), this.userid);
    this.reserveForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
    });

  }

  getAvailableRooms(){
    this.availableRooms = [];
    const checkInDate = this.reserveForm.get('checkInDate')?.value;
    const checkOutDate = this.reserveForm.get('checkOutDate')?.value;

    this.reservationsService.getAvailableRooms(checkInDate, checkOutDate)
      .pipe(
        tap((response: any[]) => {
          this.availableRooms = response.map(res => ({
            Id: res.id,
            Type: res.type,
            Capacity: res.capacity,
            RatePerDay: res.ratePerDay
          }));
          console.log(this.availableRooms);
        }),
        catchError((error) => {
          window.alert("An unexpected error occurred while fetching available rooms!");
          return of([]); // Devuelve un arreglo vacío para evitar romper el flujo
        })
      )
      .subscribe();
  }

  roomAvailable(id: number, capacity: number, ratePerDay: number, type:string){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can also use 'auto' for instant scrolling
    });

    this.checkin = this.reserveForm.get('checkInDate')?.value;
    this.checkout = this.reserveForm.get('checkOutDate')?.value;
    const diffInMilliseconds = new Date(this.checkout).valueOf() - new Date(this.checkin).valueOf();
    this.totalNights = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    this.showInvoice = true;
    this.capacity = capacity;
    this.ratePerNight = ratePerDay;
    this.type = type;
    this.roomNo = id;
    this.totalRoomCost = this.totalNights * this.ratePerNight;
    this.taxes = this.totalRoomCost * 0.18;
    this.extraCharges = this.totalRoomCost * 0.10;
    this.totalBill = this.totalRoomCost + this.taxes + this.extraCharges;
  }

  close(){
    this.showInvoice = false;
  }

  confirmReserve(){
    const checkInDate = this.reserveForm.get('checkInDate')?.value;
    const checkOutDate = this.reserveForm.get('checkOutDate')?.value;
    this.reservationsService.reserve(this.userid, this.roomNo, checkInDate, checkOutDate, this.totalBill)
      .pipe(
        tap((response) => {
          console.log(response);
          this.availableRooms = [];
          window.alert("Room reserved successfully!");
          this.router.navigate(['/dashboard']);
          this.showInvoice = false;
        }),
        catchError((error) => {
          window.alert("An unexpected error occurred while reserving the room!");
          return of(null); // Devuelve un valor vacío para evitar romper el flujo
        })
      )
      .subscribe();
  }

}
