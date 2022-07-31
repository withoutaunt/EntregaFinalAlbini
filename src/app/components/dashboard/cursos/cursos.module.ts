import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { InscribirAlumnoComponent } from './inscribir-alumno/inscribir-alumno.component';


@NgModule({
  declarations: [
    InscribirAlumnoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
