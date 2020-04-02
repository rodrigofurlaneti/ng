import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomeComponente2Component } from '../component/nome-componente2.component';
import { NomeServicoService } from '../service/nome-servico.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NomeComponente2Component
  ],
  exports: [
    NomeComponente2Component
  ],
  providers: [
    NomeServicoService
  ]
})
export class NomeModuloModule { }
