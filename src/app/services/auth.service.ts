import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://mi-backend-mm.onrender.com/auth';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario);
  }
}