import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardGeralComponent } from './card-geral/card-geral.component';
import { ListarComponent } from './funcionario/listar/listar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarregarComponent } from './funcionario/carregar/carregar.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    NavBarComponent,
    CardGeralComponent,
    ListarComponent,
    CarregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
