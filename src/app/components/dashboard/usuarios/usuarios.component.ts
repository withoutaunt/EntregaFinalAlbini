import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuarios } from '../../../interfaces/usuarios';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuariosList: Usuarios[] = [];
  constructor( private usuariosService: UsuariosService, private dialog: MatDialog ) { }
  
  ngOnInit(): void {
    this.getUsuarios();
    
  }
  getUsuarios(){
    this.usuariosService.getUsuariosList().subscribe(
      (data)=>{
        this.usuariosList=data;
      }
    )
  }

  openDialog() {
   this.dialog.open(CrearUsuarioComponent);{

   }

   
  }
 

  displayedColumns: string[] = ['id', 'nombreDeUsuario', 'email', 'telefono'];
  // dataSource = ELEMENT_DATA;



  
  

}
