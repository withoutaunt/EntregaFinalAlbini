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


const routes: Routes = [
  {path: '', component: DashboardComponent,children: [
  {path: '', component: InicioComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'cursos', component: CursosComponent},
  {path:'crear-usuario', component: CrearUsuarioComponent},
  {path:'detalles-usuario/:id', component: DetalleUsuarioComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path:'crear-usuario', component: CrearUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
