import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcertadasPage } from './acertadas.page';

const routes: Routes = [
  {
    path: '',
    component: AcertadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcertadasPageRoutingModule {}
