import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quiz5PageRoutingModule } from './quiz5-routing.module';

import { Quiz5Page } from './quiz5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quiz5PageRoutingModule
  ],
  declarations: [Quiz5Page]
})
export class Quiz5PageModule {}
