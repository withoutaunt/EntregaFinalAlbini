import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  root_url= 'http://localhost:3000/usuariosList'
  constructor(private http: HttpClient) { }

   
}
