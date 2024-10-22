import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Opcion} from '../models/option';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class OpcionService {

  endpoint = `${environment.BASE_ENDPOINT}/Opcion`;

  constructor(protected  http: HttpClient) {
  }

  listar(){
    return this.http.get<Opcion[]>(this.endpoint);
  }
}
