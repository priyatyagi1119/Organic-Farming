import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerrPageRoutingModule } from './farmerr-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FarmerrPage } from './farmerr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerrPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FarmerrPage]
})
export class FarmerrPageModule {}
