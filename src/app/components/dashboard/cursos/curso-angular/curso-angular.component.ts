import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from 'src/app/interfaces/alumnos'; 
import {MatDialog} from '@angular/material/dialog';
import { map, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-angular',
  templateUrl: './curso-angular.component.html',
  styleUrls: ['./curso-angular.component.css']
})
export class CursoAngularComponent implements OnInit {

  alumnosList:Alumnos[]=[];
  alumnos:any= [];
  constructor(private AlumnosService:AlumnosService, private dialog: MatDialog, private router:Router) { }
  subscriptions: Subscription = new Subscription;
  displayedColumns= ['id', 'nombre', 'apellido', 'sexo'];

  ngOnInit(): void {  
    this.subscriptions=new Subscription();
    this.getAlumnos();

  }
  getAlumnos() {
    this.subscriptions.add(
    this.AlumnosService.getAlumnosList().subscribe(
      (data) => {
        this.alumnosList = data;
      }
    )
    )
  }
  onClickRow(el:any){
    this.AlumnosService.alumnoToEdit=el;
    this.router.navigate(['/alumnos']);
  }

  getDetalleAlumno(id: number) {
    this.AlumnosService.getAlumnoSolo(id).subscribe(
      (data) => {
        console.log(data);}
    )


  }
  onGetAlumnoDetails(el:any){
    this.router.navigate([`/detalles-alumno/${el.id}`]);
  }


  deleteAlumno(id: number) {
    this.AlumnosService.deleteAlumno(id).subscribe(
      (data) => {
        this.getAlumnos();
      }
    )
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }



}
