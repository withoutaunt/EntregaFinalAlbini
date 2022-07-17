import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  root_url= 'https://62c1291beff7f7856f0a0671.mockapi.io/api/v1/alumnos/'
  constructor(private http: HttpClient) { }

  getAlumnosList(): Observable<Alumnos[]>{
    return this.http.get <Alumnos[]>(this.root_url);
  }
  getAlumnoSolo(id:number): Observable<Alumnos>{
    return this.http.get <Alumnos>(this.root_url + id)
  }



}
