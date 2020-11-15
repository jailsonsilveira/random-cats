import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class PagesModule { }
