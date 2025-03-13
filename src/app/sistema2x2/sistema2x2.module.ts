import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sistema2x2PageRoutingModule } from './sistema2x2-routing.module';

import { Sistema2x2Page } from './sistema2x2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sistema2x2PageRoutingModule
  ],
  declarations: [Sistema2x2Page]
})
export class Sistema2x2PageModule {}
