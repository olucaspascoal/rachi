import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { AplicativoComponent } from './aplicativo/aplicativo.component';
import { PlanosComponent } from './planos/planos.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FuncoesComponent,
    AplicativoComponent,
    PlanosComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
