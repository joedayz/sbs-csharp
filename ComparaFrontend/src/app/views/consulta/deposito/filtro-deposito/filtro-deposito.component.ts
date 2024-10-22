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
import {ProductoServicioService} from '../../../../services/producto-servicio.service';
import {CODIGO_DEPOSITO} from '../../../../utils/constantes';
import {ConsultaFiltro} from '../../../../models/consultaFiltro';

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
  filtro: ConsultaFiltro = new ConsultaFiltro();

  constructor(
    private readonly productoServicioService: ProductoServicioService,
    private readonly departamentoService: DepartamentoService,
    public readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productoServicioService.listaCambios.subscribe(data =>{
      this.dataProducto = data;
    });
    this.listar();
    this.cargarDepartamentos();
  }

  cargarData(event: any) {

  }

  ocultar(event: any) {

  }

  filtrar() {

  }

  activateAnimation() {

  }

  private cargarDepartamentos() {
    this.departamentoService.listar().subscribe(
      departamentos => {
        this.departamentos = departamentos;
      }
    );
  }

  private listar() {
    if(this.filtro!=null){
      this.productoServicioService.listar(this.filtro).subscribe(data => {
        this.dataProducto = data;
      });
      this.filtro.ConsultaFiltro(CODIGO_DEPOSITO);
    }
  }
}
