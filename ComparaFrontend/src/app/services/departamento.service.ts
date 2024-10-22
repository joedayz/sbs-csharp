import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {Departamento} from '../models/departamento';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class DepartamentoService {

  endpoint = `${environment.BASE_ENDPOINT}/departamento`;

  constructor(protected http: HttpClient) {
  }

  listar(){
    return this.http.get<Departamento[]>(this.endpoint).pipe(
      map((resp: Departamento[]) => {
        return resp.map( departamento => {
          return {
            label: departamento.nombre,
            value: departamento.departamentoId
          };
        });
      })
    );
  }

}
