import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ListarComponent } from './funcionario/listar/listar.component';
import { CarregarComponent } from './funcionario/carregar/carregar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/funcionario/listar',
    pathMatch:'full'
  },
  {
    path:'funcionario',
    component:FuncionarioComponent,
    children : [
      {
        path:'listar',
        component : ListarComponent
      },
      {
        path:'carregar/:id',
        component : CarregarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
