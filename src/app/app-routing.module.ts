import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './components/dashboard/alumnos/alumnos.component';



const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'}, //ruta hacia el login de entrada
  {path: 'login', component: LoginComponent},
  // {path: '**',redirectTo:'login', pathMatch: 'full' }, //redireccion al login al fallar la ruta
  {path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module'). then (x=> x.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
