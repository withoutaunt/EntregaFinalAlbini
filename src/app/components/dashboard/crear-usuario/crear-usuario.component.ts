import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuarios } from '../../../interfaces/usuarios';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  formCrearUsuario: FormGroup;
  submitted = false;
  UsuariosService: any;


  constructor(private fb: FormBuilder,
    private usuariosService: UsuariosService) {
    this.formCrearUsuario = this.fb.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required],
      adress: ['', Validators.required],


    })
  }

  ngOnInit(): void {
  }
  //VALIDACION PARA QUE SE COMPLETEN TODOS LOS CAMPOS EN EL FORM 
 
  onSubmit(){
    const usuario=this.formCrearUsuario.value;
    this.UsuariosService.saveUsuario(usuario).subscribe(
      (val: any)=>{
        console.log(val)
      }
    );
  }

 
  
 }








