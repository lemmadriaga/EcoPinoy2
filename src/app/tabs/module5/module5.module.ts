import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module5PageRoutingModule } from './module5-routing.module';

import { Module5Page } from './module5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module5PageRoutingModule
  ],
  declarations: [Module5Page]
})
export class Module5PageModule {}
