import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Usuarios } from '../../../models/usuarios';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuariosList: Usuarios[] = [];
  constructor( private UsuariosService: UsuariosService) { }

  displayedColumns: string[] = ['id', 'nombreDeUsuario', 'email', 'telefono'];
  // dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.UsuariosService.getUsuariosList().subscribe(
      (data)=>{
        this.usuariosList=data;
      }
    )
  }
  getDetallesUsuarios(id:number){
    this.UsuariosService.getUsuarioSolo(id).subscribe(
      (data)=>{
       console.log(data)
      }
    )

  }

}
