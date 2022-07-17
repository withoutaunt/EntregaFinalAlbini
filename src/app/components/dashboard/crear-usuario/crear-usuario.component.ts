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
  botonCrearUsuario: FormGroup;
  submitted = false;
  UsuariosService: any;


  constructor(private fb: FormBuilder,
    private_usuariosService: UsuariosService) {
    this.botonCrearUsuario = this.fb.group({
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
  agregarUsuario() {
    this.submitted = true;
    console.log(this.botonCrearUsuario.value);
    this.UsuariosService.botonCrearUsuario(this.botonCrearUsuario.value).subscribe((result: any)=>{
      console.log(result);
    })

    if (this.botonCrearUsuario.invalid) {
      return;
    }
    
    // const usuarios: any = {
    //   id: this.crearUsuario.value.id,
    //   email: this.crearUsuario.value.email,
    //   password: this.crearUsuario.value.password,
    //   adress: this.crearUsuario.value.adress,
    //   phonenumber: this.crearUsuario.value.phonenumber,
    //   role: this.crearUsuario.value.role,
    //   username: this.crearUsuario.value.username,

    // }
    // this.UsuariosService.postUsuario(usuarios).then(()=>{
    //   console.log ('se agrego con exito')
    // })
  }
  // onSubmit(){
  //   const Usuarios=this.crearUsuario.value;
  //   this.UsuariosService.postUsuario(Usuarios).subscribe(
  //     (val: any)=>{
  //       console.log(val);
  
  //     }
  //   );

  // }




}


