import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sistema3x3PageRoutingModule } from './sistema3x3-routing.module';

import { Sistema3x3Page } from './sistema3x3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sistema3x3PageRoutingModule
  ],
  declarations: [Sistema3x3Page]
})
export class Sistema3x3PageModule {}
