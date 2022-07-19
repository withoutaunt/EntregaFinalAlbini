import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from '../../../interfaces/alumnos';
import {MatDialog} from '@angular/material/dialog';
import { CrearAlumnoComponent } from '../crear-alumno/crear-alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnosList:Alumnos[]=[];
  constructor(private AlumnosService:AlumnosService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'sexo'];

  ngOnInit(): void {
    this.getAlumnos();
  }
  getAlumnos(){
    this.AlumnosService.getAlumnosList().subscribe(
      (data)=>{
        this.alumnosList=data;
      }
    )
  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearAlumnoComponent);

    
  }

}
