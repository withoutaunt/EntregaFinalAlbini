import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  usuarioId: any = '';

  constructor( private usuariosService: UsuariosService,
              private ActivatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    

    // this.usuariosService.getUsuarioSolo(this.usuarioId).subscribe(data=>{
    //   console.log(data)
    // })
  }
  getUsuarios() {
    this.usuariosService.getUsuariosList().subscribe(
      (data) => {
        this.usuarioId = data;
      }
    )
  }

}
