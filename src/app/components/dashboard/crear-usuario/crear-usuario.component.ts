import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Usuarios } from '../../../models/usuarios';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  crearUsuario: FormGroup;
  submitted=false;
  UsuariosService: any;

  constructor(private fb: FormBuilder) { 
    this.crearUsuario= this.fb.group({
      nombreUsuario: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      contraseñaUsuario: ['', Validators.required],
      emailUsuario: ['', Validators.required],
      telefonoUsuario: ['', Validators.required],
      direccionUsuario: ['', Validators.required],

            
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    this.submitted=true;
    if (this.crearUsuario.invalid){
      return;
    }
    this.UsuariosService.agregarUsuario(usuarios).subscribre
    // console.log(this.crearUsuario);
  }

}
