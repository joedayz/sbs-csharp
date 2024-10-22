import { Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {FiltroPrestamoComponent} from './views/consulta/prestamo/filtro-prestamo/filtro-prestamo.component';
import {DetallePrestamoComponent} from './views/consulta/prestamo/detalle-prestamo/detalle-prestamo.component';
import {FiltroDepositoComponent} from './views/consulta/deposito/filtro-deposito/filtro-deposito.component';
import {DetalleDepositoComponent} from './views/consulta/deposito/detalle-deposito/detalle-deposito.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'prestamo/result', component: FiltroPrestamoComponent,
    children: [{
      path: 'detalle/:id', component: DetallePrestamoComponent
    }]
  },
  { path: 'deposito-plazo/result', component: FiltroDepositoComponent,
    children: [{
      path: 'detalle-deposito/:id', component: DetalleDepositoComponent
    }]
  }
];
