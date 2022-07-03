import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'}, //ruta hacia el login
  {path: 'login', component: LoginComponent},
  {path: 'layout', loadChildren:() => import('./components/layout/layout.module').then(x=>x.LayoutModule)}, //lazy loading de pag princ
 // {path: '**', redirectTo: 'login', pathMatch: 'full'} //ruta incorrecta=lleva al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
