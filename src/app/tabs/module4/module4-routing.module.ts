import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module4Page } from './module4.page';

const routes: Routes = [
  {
    path: '',
    component: Module4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module4PageRoutingModule {}
