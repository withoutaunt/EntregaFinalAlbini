import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedComponentsModule } from '../shared-modules/shared-modules.module';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { CursoAngularComponent } from './cursos/curso-angular/curso-angular.component';
import { CursoReactComponent } from './cursos/curso-react/curso-react.component';







@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    AlumnosComponent,
    CursosComponent,
    LayoutComponent,
    InicioComponent,
    CrearUsuarioComponent,
    CrearAlumnoComponent,
    DetalleUsuarioComponent,
    DetalleAlumnoComponent,
    CursoAngularComponent,
    CursoReactComponent,





  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedComponentsModule
  ]
})
export class DashboardModule { }
