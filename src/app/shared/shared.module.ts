import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CatComponent } from './cat/cat.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

const COMPONENTS = [
  LayoutComponent,
  CatComponent
];

const MATERIALMODULES = [
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule
];


const THIRDMODULES = [
  HttpClientModule,

]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MATERIALMODULES,
    ...THIRDMODULES,
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...MATERIALMODULES,
    ...THIRDMODULES,
    CommonModule
  ]
})
export class SharedModule { }
