import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningCenterPageRoutingModule } from './learning-center-routing.module';

import { LearningCenterPage } from './learning-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningCenterPageRoutingModule
  ],
  declarations: [LearningCenterPage]
})
export class LearningCenterPageModule {}
