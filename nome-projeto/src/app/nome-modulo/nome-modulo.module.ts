import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomeComponente2Component } from './nome-componente2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NomeComponente2Component
  ],
  exports: [
    NomeComponente2Component
  ]
})
export class NomeModuloModule { }
