import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {DepartamentoService} from '../../../../services/departamento.service';


@Component({
  selector: 'app-compara-deposito',
  templateUrl: './compara-deposito.component.html',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    SliderModule,
    DropdownModule
  ],
  styleUrls: ['./compara-deposito.component.css']
})

export class ComparaDepositoComponent implements OnInit {


  form: FormGroup = new FormGroup({});

  departamentos: { label: string, value: any }[] = [];

  @Output()
  emisor = new EventEmitter();

  @Output()
  ocultar = new EventEmitter();

  constructor(private readonly departamentoService: DepartamentoService,
              private readonly fb: FormBuilder, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
    this.cargarFormulario();
    this.cargarDepartamento();
  }

  private createForm() {
    this.form = this.fb.group({
      valorDeposito: [],
      plazo: [],
      tipoMoneda: [],
      banco: [],
      departamento: []
    });
  }

  private cargarFormulario() {
    this.form.setValue({
      valorDeposito: 1000,
      plazo: 30,
      tipoMoneda: '5',
      banco: '8',
      departamento: '1'
    });
  }

  cargarDepartamento() {
    this.departamentoService.listar().subscribe((departamentos) => {
        this.departamentos = departamentos;
    });
  }

  activateAnimation() {

  }

  filtrar() {

  }
}
