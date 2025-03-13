import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sistema2x2Page } from './sistema2x2.page';

const routes: Routes = [
  {
    path: '',
    component: Sistema2x2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sistema2x2PageRoutingModule {}
