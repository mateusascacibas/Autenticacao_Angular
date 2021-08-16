import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { Login } from '../componentes/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any>{
    return this.http.post(env.apiBaseUrl + "auth", login);
  }
}
