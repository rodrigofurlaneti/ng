import { Component, OnInit } from '@angular/core';
import { NomeServicoService } from '../service/nome-servico.service';

@Component({
  selector: 'app-nome-componente2',
  templateUrl: '../component/nome-componente2.component.html',
  styleUrls: ['../component/nome-componente2.component.css']
})
export class NomeComponente2Component implements OnInit {
  entidade: string;
  atributos: string[];
  constructor(private nomeservicoServico: NomeServicoService) { 
    this.entidade = 'Cliente';
    this.atributos = this.nomeservicoServico.getAtributos();
  }

  ngOnInit(): void {
  }

}
