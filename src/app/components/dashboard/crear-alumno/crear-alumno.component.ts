import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  formCrearAlumno!: FormGroup;
  alumnoToEdit:any;
  submitted = false;
  alumno:any;
  


  constructor(private fb: FormBuilder,
              private alumnosService: AlumnosService,
              private router:Router) {
    
  }

  ngOnInit(): void {
    this.formCrearAlumno = this.fb.group({
      nombre: ['', Validators.required],
      sexo: ['', Validators.required],
      apellido: ['', Validators.required],
      cursos: ['', Validators.required],
     
    })

    this.alumnoToEdit=this.alumnosService.alumnoToEdit;
    if(this.alumnoToEdit){
      this.formCrearAlumno.get('nombre')?.patchValue(this.alumnoToEdit.nombre);
      this.formCrearAlumno.get('sexo')?.patchValue(this.alumnoToEdit.sexo);
      this.formCrearAlumno.get('apellido')?.patchValue(this.alumnoToEdit.apellido);
      this.formCrearAlumno.get('cursos')?.patchValue(this.alumnoToEdit.cursos);
    }
  }

  onSubmit(){
    const alumno= this.formCrearAlumno.value;
    if(!this.alumnoToEdit){
      this.alumnosService.postAlumno(alumno).subscribe(
        (val)=>{
          console.log(val);
          
        }
      );
    }else{
      alumno['id']=this.alumnoToEdit.id;
      this.alumnosService.updateAlumno(alumno).subscribe(
        (val)=>{
          this.alumnosService.alumnoToEdit=null;
          
        }
      )
    }
  }

  
  }

  //VALIDACION PARA QUE SE COMPLETEN TODOS LOS CAMPOS EN EL FORM 
  // aceptarAlumno(){
  //   console.log(this.formCrearAlumno.value);
  // }





