import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'pages',
  loadChildren: () => import('./pages/pages.module').then(pages => pages.PagesModule)
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/pages/random'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
