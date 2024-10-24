import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {DepartamentoService} from '../../../../services/departamento.service';
import {Router} from '@angular/router';
import {CODIGO_PRESTAMO} from '../../../../utils/constantes';
import {ConsultaFiltro} from '../../../../models/consultaFiltro';


@Component({
  selector: 'app-compara-prestamo',
  templateUrl: './compara-prestamo.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    SliderModule,
    DropdownModule
  ],
  styleUrls: ['./compara-prestamo.component.css']
})
export class ComparaPrestamoComponent implements OnInit {

  @Output()
  emisor = new EventEmitter();
  @Output()
  ocultar = new EventEmitter();

  form: FormGroup = new FormGroup({});
  departamentos: { label: string, value: any }[]  = [];

  constructor(private readonly departamentoService: DepartamentoService,
              private readonly fb: FormBuilder, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
    this.cargarFormulario();
    this.cargarDepartamento();
  }


  filtrar() {
    const filtro = new ConsultaFiltro();
    filtro.setFiltroPrestamo(CODIGO_PRESTAMO,this.form.value.tipoMoneda, this.form.value.monto,
      this.form.value.plazo , this.form.value.departamento, this.form.value.banco, this.form.value.ingreso);
    this.emisor.emit(filtro);
    this.ocultar.emit(true);
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
    this.form.setValue({
      monto: 1000,
      plazo: 6,
      ingreso: 500,
      tipoMoneda: '5',
      banco: '8',
      departamento: 1
    });
  }

  private cargarDepartamento() {
    this.departamentoService.listar().subscribe(data => {
      this.departamentos = data;
    });
  }
}
