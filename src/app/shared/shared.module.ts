import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const COMPONENTS = [
  LayoutComponent
];

const MATERIALMODULES = [
  MatIconModule,
  MatToolbarModule
];

const THIRDMODULES = [  
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
