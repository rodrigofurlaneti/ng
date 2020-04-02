# Angular 9.1.0

Angular, Component, Module, Service

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Estrutura dos diretórios


| Tables | Are | Cool | |----------|:-------------:|------:| | col 1 is| left-aligned | $1600 |

### Procedimentos - Angular cli

```sh
1 - selecionar o diretório
2 - angular cli - terminal - ng new nome-projeto (Criar projeto)
3 - selecionar o diretório src/app (Raiz)
4 - limpar o arquivo app.componente.html, acrecentar <h1>{{ title }}</h1> (Adicionar a interpolação)
5 - angular cli - terminal - ng generate component nome-componente (Criar componente)
6 - crio 4 arquivos (ts, spec.ts, html, css) e atualizou o app.module
7 - selecionar o arquivo src/app/app.component.html, adicionar o selector <app-nome-component></app-nome-component>
8 - arquivo nome-componente.html acrecentar {{ title }} (Adicionar a interpolação)
9 - terminal ng serve (Compilar para o http://localhost:4200/)
10 - selecionar o arquivo src/app/app.module.ts (Modulo raiz da aplicação) 
11 - angular cli - terminal - ng generate module nome-module
12 - selecionar o diretorio src/app/nome-modulo (Modulo secundario da aplicação) 
13 - angular cli - terminal - ng generate component nome-componente2
14 - selecionar o arquivo src/app/nome-modulo/nome-componente2/nome-modulo.module.ts, acredentar no @NgModule a propriedade exports: [NomeComponente2Component].
15 - selecionar o arquivo src/app/app.component.html, acredentar a linha <app-nome-componente2></app-nome-componente2>
16 - selecionar o arquivo src/app/app.module.ts, acredentar no @NgModule/import a propriedade NomeModuloModule
17 - selecionar o diretorio src/app/nome-modulo (Modulo secundario da aplicação) 
18 - angular cli - terminal - ng generate service nome-servico
19 - selecionar o arquivo src/app/nome-modulo/nome-servico.service.ts, incluir o metodo getAtributos(){ return ['Id', 'Nome', 'Telefone', 'Endereço', 'Cidade', 'Estado', 'Pais'];
20 - selecionar o arquivo src/app/nome-modulo/nome-modulo.module.ts, incluir no @NgModule/providers a propriendade NomeServicoService


```
