import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
MaterialModule,
MainLayoutRoutingModule,
  ]
})
export class MainLayoutModule { }
