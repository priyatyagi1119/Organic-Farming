import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerrPage } from './farmerr.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerrPageRoutingModule {}
