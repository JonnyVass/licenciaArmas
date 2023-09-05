import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'questionario/:id',
    loadChildren: () => import('./questionario/questionario.module').then( m => m.QuestionarioPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'acertadas/:id',
    loadChildren: () => import('./acertadas/acertadas.module').then( m => m.AcertadasPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./examen/examen.module').then( m => m.ExamenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
