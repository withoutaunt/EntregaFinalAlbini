import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { CursoAngularComponent } from './cursos/curso-angular/curso-angular.component';
import { CursoReactComponent } from './cursos/curso-react/curso-react.component';
import { InscribirAlumnoComponent } from './cursos/inscribir-alumno/inscribir-alumno.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,children: [
  {path: '', component: InicioComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'cursos', component: CursosComponent, children:[
    {path:'curso-angular', component: CursoAngularComponent},
    {path:'curso-react', component: CursoReactComponent},
    {path:'inscribir-alumno', component: InscribirAlumnoComponent},
  ]},
  {path:'crear-usuario', component: CrearUsuarioComponent},
  {path:'detalles-usuario/:id', component: DetalleUsuarioComponent},
  {path:'detalles-alumno/:id', component: DetalleAlumnoComponent}
  ]},
  {path: 'login', component: LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
