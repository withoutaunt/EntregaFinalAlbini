import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  formCrearAlumno: FormGroup;
  submitted = false;
  UsuariosService: any;


  constructor(private fb: FormBuilder,
    private_alumnosService: AlumnosService) {
    this.formCrearAlumno = this.fb.group({
      nombre: ['', Validators.required],
      sexo: ['', Validators.required],
      apellido: ['', Validators.required],
      cursos: ['', Validators.required],
     


    })
  }

  ngOnInit(): void {
  }
  //VALIDACION PARA QUE SE COMPLETEN TODOS LOS CAMPOS EN EL FORM 
  aceptarAlumno(){
    console.log(this.formCrearAlumno.value);
  }
  
 }
