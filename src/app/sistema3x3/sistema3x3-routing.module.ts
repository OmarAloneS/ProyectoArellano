import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sistema3x3Page } from './sistema3x3.page';

const routes: Routes = [
  {
    path: '',
    component: Sistema3x3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sistema3x3PageRoutingModule {}
