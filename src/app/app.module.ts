import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { SharedComponentsModule } from './components/shared-modules/shared-modules.module';
import { PrincipalComponent } from './components/layout/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedComponentsModule //en este module estan todos los de angular material

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
