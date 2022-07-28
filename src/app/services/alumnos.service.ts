import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Alumnos } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnoToEdit:any;
  url= 'https://62c1291beff7f7856f0a0671.mockapi.io/api/v1/alumnos'
  constructor(private http: HttpClient) { }

  getAlumnosList(): Observable<Alumnos[]>{
    return this.http.get <Alumnos[]>(this.url);
  }
  getAlumnoSolo(id:number): Observable<Alumnos>{
    return this.http.get <Alumnos>(this.url + id)
  }
  getAlumnoToEdit():Observable<any>{
    return of(this.alumnoToEdit);
  }
  
  deleteAlumno(id:number): Observable<Alumnos>{
    return this.http.delete<Alumnos>(this.url+`/${id}`);
  }

  saveAlumno(alumno: any): Observable<Alumnos>{
    return this.http.post <Alumnos>(this.url, alumno)
  }

  updateUsuario(alumno: Alumnos): Observable<Alumnos>{
    return this.http.put <Alumnos> (this.url+`/${alumno.id}`,alumno)
  }

  getAlumnoDetail(id:string):Observable<Alumnos>{
    return this.http.get<Alumnos>(this.url+`/${id}`);
  }



}
