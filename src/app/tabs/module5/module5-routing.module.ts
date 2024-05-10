import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module5Page } from './module5.page';

const routes: Routes = [
  {
    path: '',
    component: Module5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module5PageRoutingModule {}
