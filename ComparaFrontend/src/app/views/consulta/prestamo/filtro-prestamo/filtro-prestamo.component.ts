import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {ComparaPrestamoComponent} from '../compara-prestamo/compara-prestamo.component';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ProductoFinanciero} from '../../../../models/producto-financiero';
import {ConsultaFiltro} from '../../../../models/consultaFiltro';
import {DepartamentoService} from '../../../../services/departamento.service';
import {ProductoServicioService} from '../../../../services/producto-servicio.service';
import {CODIGO_PRESTAMO} from '../../../../utils/constantes';


@Component({
  selector: 'app-filtro-prestamo',
  templateUrl: './filtro-prestamo.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComparaPrestamoComponent,
    ReactiveFormsModule,
    SliderModule,
    DropdownModule,
    TableModule,
    RouterLink
  ],
  styleUrls: ['./filtro-prestamo.component.css']
})
export class FiltroPrestamoComponent implements OnInit {
  estado: boolean = false;
  form: FormGroup = new FormGroup({});
  dataProducto: ProductoFinanciero[] = [];
  filtro: ConsultaFiltro = new ConsultaFiltro();
  departamentos: { label: string, value: any }[] = [];

  constructor(private readonly productoServicioService: ProductoServicioService,
              private readonly departamentoService: DepartamentoService,
              private readonly fb: FormBuilder,
              public readonly route: ActivatedRoute) {
    this.createForm();
    this.cargarFormulario();
  }

  ngOnInit(): void {
    this.productoServicioService.listaCambios.subscribe(data => {
      this.dataProducto = data;
    });
    this.listar();
    this.cargarDepartamento();
  }


  cargarData(event: any) {
    this.filtro = event;
    console.log(this.filtro);
    this.cargarFormulario();
    this.listar();
  }

  ocultar(event: any) {
    this.estado = event;
  }

  filtrar() {
    const filtro = new ConsultaFiltro();
    filtro.setFiltroPrestamo(CODIGO_PRESTAMO, this.form.value.tipoMoneda, this.form.value.monto,
      this.form.value.plazo, this.form.value.departamento, this.form.value.banco, this.form.value.ingreso);
    this.productoServicioService.listar(filtro).subscribe(data => {
      this.productoServicioService.listaCambios.next(data);
    });
  }

  private createForm() {
    this.form = this.fb.group({
      monto: [],
      plazo: [],
      ingreso: [],
      tipoMoneda: [],
      banco: [],
      departamento: []
    });
  }

  private cargarFormulario() {
    if (this.filtro != null) {
      this.form.setValue({
        monto: this.filtro.montoMaximoAceptable,
        plazo: this.filtro.plazoMaximoMes,
        ingreso: this.filtro.ingresoPermitido,
        tipoMoneda: this.filtro.tipoMonedaId,
        banco: this.filtro.tipoInstitucionId,
        departamento: this.filtro.departamentoId
      });
    } else {
      this.form.setValue({
        monto: 1000,
        plazo: 6,
        ingreso: 500,
        tipoMoneda: '5',
        banco: '8',
        departamento: 1
      });
    }
  }

  private listar() {
    if (this.filtro != null) {
      this.productoServicioService.listar(this.filtro).subscribe(data => {
        this.dataProducto = data;
      });
      this.filtro.ConsultaFiltro(CODIGO_PRESTAMO);
    }
  }

  private cargarDepartamento() {
    this.departamentoService.listar().subscribe(data => {
      this.departamentos = data;
    });
  }
}
