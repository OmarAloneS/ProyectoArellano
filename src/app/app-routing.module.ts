import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sistema2x2',
    loadChildren: () => import('./sistema2x2/sistema2x2.module').then( m => m.Sistema2x2PageModule)
  },
  {
    path: 'sistema3x3',
    loadChildren: () => import('./sistema3x3/sistema3x3.module').then( m => m.Sistema3x3PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
