import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/Model/funcionario';
import { FuncionarioService } from 'src/app/Services/funcionario.service';

@Component({
  selector: 'app-carregar',
  templateUrl: './carregar.component.html',
  styleUrls: ['./carregar.component.css']
})
export class CarregarComponent {

  constructor(
    private router : ActivatedRoute,
    private funcionarioService : FuncionarioService
  ){}

  ngOnInit(): void {
    this.validarFormulario ()
    this.carregarEvento();
  }

  formAtualizar! : FormGroup;
  funcionario = {} as Funcionario;


  public carregarEvento() : void {
    debugger
    const funcionarioIdParametro = this.router.snapshot.paramMap.get('id')

    if (funcionarioIdParametro !== null) {
      // this.estatoOperacao = 'put';
     
      //o + na frente do eventoId serve para converter em number
      this.funcionarioService.getFuncionarioById(+funcionarioIdParametro).subscribe({
        next: (funcionario: Funcionario) =>{
          this.funcionario = {...funcionario}
          this.formAtualizar.patchValue(this.funcionario)
        },
        error: (e: any) =>{
          console.log(e)
        },
        complete: () => console.log("Atualizado")
      })
    }
  }

  public validarFormulario () : void {
    this.formAtualizar = new FormGroup({
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

  public alterarFuncionario () : void {
    debugger
    if(this.formAtualizar.valid){
        {
          this.funcionario = {id : this.funcionario.id, ...this.formAtualizar.value}
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

  public voltarListar(): void{
    window.location.href = "funcionario/listar";
  }

}
