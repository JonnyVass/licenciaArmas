import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcertadasPageRoutingModule } from './acertadas-routing.module';

import { AcertadasPage } from './acertadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcertadasPageRoutingModule
  ],
  declarations: [AcertadasPage]
})
export class AcertadasPageModule {}
