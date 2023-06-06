import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserrPageRoutingModule } from './userr-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserrPage } from './userr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserrPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserrPage]
})
export class UserrPageModule {}
