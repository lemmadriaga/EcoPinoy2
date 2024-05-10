import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quiz5Page } from './quiz5.page';

const routes: Routes = [
  {
    path: '',
    component: Quiz5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quiz5PageRoutingModule {}
