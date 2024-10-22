import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Item, Product} from '../models/product.interface';


@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) {
  }

  getCartItems(): Observable<Item[]> {
    return this.http
      .get("http://localhost:3000/cart")
      .pipe(
        map((response: any) => response),
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get("http://localhost:3000/products")
      .pipe(
        map((response: any) => response),
        catchError((error: any) => {
          return throwError(() => error);
        })
      );

  }
}
