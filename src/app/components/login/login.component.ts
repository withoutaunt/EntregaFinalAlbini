import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder, private router:Router ) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],


    })
  }
  //route to adminlogin
  goToPage(pageName:string):void{
    this.router.navigate(['{$pageName}']);
  }

  ngOnInit(): void {
  }
  
  ingresar(){     
    console.log(this.form);
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;


    if (usuario == 'adminlogin' && password =='123456'){
      this.router.navigate(['dashboard']);

    }else{
      //ponerle un cartelito segun admin/user
      this.form.reset();
    } 

  }
}

