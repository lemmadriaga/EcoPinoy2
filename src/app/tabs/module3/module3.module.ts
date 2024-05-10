import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Module3PageRoutingModule } from './module3-routing.module';

import { Module3Page } from './module3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Module3PageRoutingModule
  ],
  declarations: [Module3Page]
})
export class Module3PageModule {}
