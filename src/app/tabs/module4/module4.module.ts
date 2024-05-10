import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module4PageRoutingModule } from './module4-routing.module';

import { Module4Page } from './module4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module4PageRoutingModule
  ],
  declarations: [Module4Page]
})
export class Module4PageModule {}
