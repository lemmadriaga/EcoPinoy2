import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningCenterPage } from './learning-center.page';

const routes: Routes = [
  {
    path: '',
    component: LearningCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningCenterPageRoutingModule {}
