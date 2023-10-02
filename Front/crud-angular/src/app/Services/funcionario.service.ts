import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../Model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  urlAcessoFuncionario = 'http://localhost:8080/funcionario'

  constructor(
    private http: HttpClient
  ) { }

  listarFuncionarios() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.urlAcessoFuncionario + "/listar")
  }

  getFuncionarioById(id:number) : Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.urlAcessoFuncionario}/${id}`)
  }


  postFuncionario(funcionario : Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>(this.urlAcessoFuncionario, funcionario)
  }

  putFuncionario(id : number, funcionario : Funcionario) : Observable<Funcionario>{
    return this.http.put<Funcionario>(`${this.urlAcessoFuncionario}/${id}`, funcionario)
  }

  deletarFuncionario(id : number) : Observable<any>{
    return this.http.delete(`${this.urlAcessoFuncionario}/${id}`)
  }

}
