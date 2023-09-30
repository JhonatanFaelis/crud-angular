import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ListarComponent } from './funcionario/listar/listar.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
