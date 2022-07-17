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







@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    AlumnosComponent,
    CursosComponent,
    LayoutComponent,
    InicioComponent,
    CrearUsuarioComponent,





  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedComponentsModule
  ]
})
export class DashboardModule { }
