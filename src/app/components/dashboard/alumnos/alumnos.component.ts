import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { Alumnos } from '../../../models/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnosList:Alumnos[]=[];
  constructor(private AlumnosService:AlumnosService) { }

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

}
