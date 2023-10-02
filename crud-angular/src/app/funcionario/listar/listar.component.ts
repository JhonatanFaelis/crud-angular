import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/Model/funcionario';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  
  constructor(
    private funcionarioSevice : FuncionarioService,
    private router : Router
  ){}

  ngOnInit(): void{
       
    this.getFuncionarios();
    
 
  }

  public funcionario: Funcionario[] = [];
  public funcionarioId : number = 0;

  

  public getFuncionarios () : void{
    this.funcionarioSevice.listarFuncionarios().subscribe({
      next:(_funcionario : Funcionario []) => {
        this.funcionario = _funcionario
      },
      error : (error :any) => {
        
      },
      complete: () => console.log("")
    });
  }

  deletarFuncionario(id : number, nome : String){

    this.funcionarioId = id;

    const excluir : boolean = confirm(`Deseja realmente excluir o funcionário ${nome}?`)

    if (excluir) {
      this.funcionarioSevice.deletarFuncionario(this.funcionarioId).subscribe({
        next:() => {
          this.getFuncionarios();
      } ,
      error: (e) => {
        console.log(e);
      },
      complete: () => {window.location.href = "funcionario/listar";}
      })
    }
  }

  detalhe ( funcionarioId : number) : void{
    this.router.navigate([`/funcionario/carregar/${funcionarioId}`])
   }

}
