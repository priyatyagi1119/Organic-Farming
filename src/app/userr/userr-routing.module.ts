import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserrPage } from './userr.page';

const routes: Routes = [
  {
    path: '',
    component: UserrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserrPageRoutingModule {}
