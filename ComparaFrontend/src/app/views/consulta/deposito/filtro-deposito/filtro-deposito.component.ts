import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ComparaDepositoComponent} from '../compara-deposito/compara-deposito.component';
import {DepartamentoService} from '../../../../services/departamento.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
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
    CommonModule,
    ComparaDepositoComponent,
    SliderModule,
    DropdownModule,
    TableModule,
    RouterLink
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
    private readonly fb: FormBuilder,
    public readonly route: ActivatedRoute) {
    this.createForm();
    this.cargarFormulario();
  }

  ngOnInit(): void {
    this.productoServicioService.listaCambios.subscribe(data =>{
      this.dataProducto = data;
    });
    this.listar();
    this.cargarDepartamentos();
  }

  cargarData(event: any) {
      this.filtro = event;
      this.cargarFormulario();
      this.listar();
  }

  ocultar(event: any) {
      this.estado = event;
  }

  filtrar() {
    const filtro = new ConsultaFiltro();
    filtro.setFiltroDeposito(CODIGO_DEPOSITO, this.form.value.tipoMoneda, this.form.value.valorDeposito,
      this.form.value.plazo, this.form.value.departamento, this.form.value.banco);
    this.productoServicioService.listar(filtro).subscribe(data => {
      this.productoServicioService.listaCambios.next(data);
    });
  }


  createForm() {
    this.form = this.fb.group({
      valorDeposito: [],
      plazo: [],
      tipoMoneda: [],
      banco: [],
      departamento: []
    });
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

  private cargarFormulario() {
    if(this.filtro!=null){
      this.form.setValue({
        valorDeposito: this.filtro.montoMaximoDeposito,
        plazo: this.filtro.plazoMaximoDia,
        tipoMoneda: this.filtro.tipoMonedaId,
        banco: this.filtro.tipoInstitucionId,
        departamento: this.filtro.departamentoId
      });

    }else{
      this.form.setValue({
        valorDeposito: 1000,
        plazo: 30,
        tipoMoneda: '5',
        banco: '8',
        departamento: 1
      });
    }
  }
}
