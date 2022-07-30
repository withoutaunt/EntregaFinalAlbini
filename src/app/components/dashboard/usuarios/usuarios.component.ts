import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuarios } from '../../../interfaces/usuarios';
import { map, Observable, Subscription } from 'rxjs';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any= [];
  usuariosList: Usuarios[] = [];
  displayedColumns= ['id', 'nombreDeUsuario', 'email', 'telefono'];
  subscriptions: Subscription = new Subscription;

  constructor(private router:Router, private usuariosService: UsuariosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriptions=new Subscription();
    this.getUsuarios();


  }
  getUsuarios() {
    this.subscriptions.add(
    this.usuariosService.getUsuariosList().subscribe(
      (data) => {
        this.usuariosList = data;
      }
    )
    )
  }
  onClickRow(el:any){
    this.usuariosService.usuarioToEdit=el;
    this.router.navigate(['/editar-usuario']);
  }

  getDetalleUsuario(id: number) {
    this.usuariosService.getUsuarioSolo(id).subscribe(
      (data) => {
        console.log(data);}
    )


  }
  onGetUsuarioDetails(el:any){
    this.router.navigate([`/detalles-usuario/${el.id}`]);
  }


  deleteUsuario(id: number) {
    this.usuariosService.deleteUsuario(id).subscribe(
      (data) => {
        this.getUsuarios();
      }
    )
  }

  openDialog() {
    this.dialog.open(CrearUsuarioComponent); {

    }


  }
  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }


  
  // dataSource = ELEMENT_DATA;






}
function id(id: any) {
  throw new Error('Function not implemented.');
}

