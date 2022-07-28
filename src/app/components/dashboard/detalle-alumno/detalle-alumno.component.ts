import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumnos } from '../../../interfaces/alumnos';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {
  alumnoToShow!: Alumnos;
  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnoDetail(this.route.snapshot.params['id']).subscribe(
      (val)=>{
        this.alumnoToShow=val;
      }
    )
  }

}
