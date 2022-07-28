import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes  } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  usuarioToShow!: Usuarios;

  constructor( private usuariosService: UsuariosService,
              private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarioDetail(this.route.snapshot.params['id']).subscribe(
      (val)=>{
        this.usuarioToShow=val;
      }
    )
  }

    

    // this.usuariosService.getUsuarioSolo(this.usuarioId).subscribe(data=>{
    //   console.log(data)
    // })
  
  

}
