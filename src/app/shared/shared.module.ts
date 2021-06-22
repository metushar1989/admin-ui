import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ MainLayoutComponent,
    HeaderComponent,FooterComponent,SideBarComponent],
  imports: [
    CommonModule,RouterModule,MaterialModule
  ],
  exports:[MaterialModule,FormsModule,
    ReactiveFormsModule,MainLayoutComponent,
    HeaderComponent,FooterComponent,SideBarComponent]
})
export class SharedModule { }
