import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeModuloModule } from './nome-modulo/module/nome-modulo.module';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NomeModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
