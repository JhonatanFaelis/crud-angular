import { Component } from '@angular/core';
import { Funcionario } from '../Model/funcionario';
import { FuncionarioService } from '../Services/funcionario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {

  constructor(
    private funcionarioService : FuncionarioService,
    private router : ActivatedRoute,

  ){}

   ngOnInit(): void {
    this.validarFormulario();
    
  }

  form!: FormGroup;
  funcionario = {} as Funcionario;
  estatoOperacao = "post";
  

  get f (): any{
    return this.form.controls;
   }

   public validarFormulario () : void {
    this.form = new FormGroup({
      nome : new FormControl('',Validators.required),
      sobreNome : new FormControl('',Validators.required),
      funcao : new FormControl('',Validators.required),
      gerente : new FormControl('',Validators.required),
      tipoContrato : new FormControl('',Validators.required),
      salario : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      telefone : new FormControl('',[Validators.required]),
    })
  }

  public limparFormulario () : void {
    this.form.reset();
  }



  public salvarOuAlterarEvento () : void {
    debugger
    if(this.form.valid){
      if (this.estatoOperacao === 'post') {
        this.funcionario = {...this.form.value}

        this.funcionarioService.postFuncionario(this.funcionario).subscribe(
          {
            next : () =>{
            },
            error : (e) =>{
              console.log(e)
            },
            complete : () =>{
              window.location.href = "funcionario/listar";
            }
          }
        )
        }
        else
        {
          this.funcionario = {id : this.funcionario.id, ...this.form.value}
          this.funcionarioService.putFuncionario(this.funcionario.id, this.funcionario).subscribe(
            {
              next : () =>{
  
              },
              error : (e) =>{
                console.log(e)
              },
              complete : () =>{
                window.location.href = "funcionario/listar";
              }
            }
          )
        }
      
    }
  }

  

}
