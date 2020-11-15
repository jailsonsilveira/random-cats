import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RandomCatsComponent } from './random-cats.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [{
  path: '',
  component: RandomCatsComponent
}]

@NgModule({
  declarations: [RandomCatsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RandomCatsModule { }
