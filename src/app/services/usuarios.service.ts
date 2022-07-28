import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarioToEdit:any;
  url= 'https://62c1291beff7f7856f0a0671.mockapi.io/api/v1/usuarios';
  constructor(private http: HttpClient) { }

  getUsuariosList(): Observable<Usuarios[]>{
    return this.http.get <Usuarios[]>(this.url);
  }
  getUsuarioSolo(id:number): Observable<Usuarios>{
    return this.http.get <Usuarios>(this.url + id)
  }
  getProductToEdit():Observable<any>{
    return of(this.usuarioToEdit);
  }
  
  deleteUsuario(id:number): Observable<Usuarios>{
    return this.http.delete<Usuarios>(this.url+`/${id}`);
  }

  postUsuario(usuario: any): Observable<Usuarios>{
    return this.http.post <Usuarios>(this.url, usuario)
  }

  updateUsuario(usuario: Usuarios): Observable<Usuarios>{
    return this.http.put <Usuarios> (this.url+`/${usuario.id}`,usuario)
  }

  getUsuarioDetail(id:string):Observable<Usuarios>{
    return this.http.get<Usuarios>(this.url+`/${id}`);
  }
}
