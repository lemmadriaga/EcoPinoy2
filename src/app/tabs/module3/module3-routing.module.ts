import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module3Page } from './module3.page';

const routes: Routes = [
  {
    path: '',
    component: Module3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module3PageRoutingModule {}
