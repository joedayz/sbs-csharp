import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {ComparaDepositoComponent} from '../compara-deposito/compara-deposito.component';
import {DepartamentoService} from '../../../../services/departamento.service';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ProductoFinanciero} from '../../../../models/producto-financiero';

@Component({
  selector: 'app-filtro-deposito',
  templateUrl: './filtro-deposito.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    NgIf,
    ComparaDepositoComponent,
    SliderModule,
    DropdownModule,
    TableModule,
    RouterLink,
  ],
  styleUrls: ['./filtro-deposito.component.css']
})
export class FiltroDepositoComponent implements OnInit {

  departamentos: { label: string, value: any }[] = [];
  form: FormGroup = new FormGroup({});
  estado = false;
  dataProducto: ProductoFinanciero[] = [];

  constructor(
    private readonly departamentoService: DepartamentoService,
    public readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cargarData(event: any) {

  }

  ocultar(event: any) {

  }

  filtrar() {

  }

  activateAnimation() {

  }
}
