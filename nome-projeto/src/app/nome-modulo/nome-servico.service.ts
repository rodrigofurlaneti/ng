import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomeServicoService {

  constructor() { }

  getAtributos(){
    return ['Id', 'Nome', 'Telefone', 'Endereço', 'Cidade', 'Estado', 'Pais'];
  }
}
