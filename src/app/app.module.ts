import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardGeralComponent } from './card-geral/card-geral.component';
import { ListarComponent } from './funcionario/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    NavBarComponent,
    CardGeralComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
