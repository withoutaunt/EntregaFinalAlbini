import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  root_url= 'https://62c1291beff7f7856f0a0671.mockapi.io/api/v1/usuarios/'
  constructor(private http: HttpClient) { }

  getUsuariosList(): Observable<Usuarios[]>{
    return this.http.get <Usuarios[]>(this.root_url);
  }
  getUsuarioSolo(id:number): Observable<Usuarios>{
    return this.http.get <Usuarios>(this.root_url + id)
  }
  
  deleteUsuario(id:number): Observable<Usuarios>{
    return this.http.delete<Usuarios>(this.root_url+id);
  }

  saveUsuario(usuario: Usuarios){
    return this.http.post (`${this.root_url}`, usuario);
  }

  updateUsuario(id: number, updatedUsuario: Usuarios){
    return this.http.put (`${this.root_url}$ {id}`, updatedUsuario);
  }
}
