import {Component, OnInit} from '@angular/core';
import {Opcion} from '../../models/option';
import {OpcionService} from '../../services/opcion.service';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opcion: Opcion[] = [];

  constructor(private readonly opcionService: OpcionService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.opcionService.listar().subscribe(data => {
      this.opcion = data;
    })
  }


}
