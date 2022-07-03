import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedComponentsModule } from '../shared-modules/shared-modules.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentsModule
  ]
})
export class LayoutModule { }
