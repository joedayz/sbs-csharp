import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private router: Router, private http: HttpClient
  ) {
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post('/register', {username, password}, {responseType: 'text'})
      .pipe(catchError((error) => throwError(() => error)));
  }

login(username: string, password: string): Observable<any> {
    return this.http.post('/login', {username, password})
      .pipe(catchError((error) => throwError(() => error)));
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(['/'])
      .then(() => {
        console.log("Navegación exitosa");
      })
      .catch((error) => {
        console.error("Error al navegar", error);
      });
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`/getUserById/${id}`, {responseType: 'text'})
      .pipe(catchError((error) => throwError(() => error)));
  }

}
