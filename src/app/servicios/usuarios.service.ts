import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  root_url= 'https://62c1291beff7f7856f0a0671.mockapi.io/api/v1/usuarios'
  constructor(private http: HttpClient) { }

  getUsuariosList(): Observable<Usuarios[]>{
    return this.http.get <Usuarios[]> (this.root_url);
  }
}
