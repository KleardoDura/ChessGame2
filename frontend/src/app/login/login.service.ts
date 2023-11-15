import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.api + '/user/login', { email: email, password: password }, {
      observe: 'response'
    })
      .pipe(
        tap(response => console.log(response)),
        catchError(error => {
          console.error('Fehler:', error);
          return throwError(error);
        })
      );
  }

}
