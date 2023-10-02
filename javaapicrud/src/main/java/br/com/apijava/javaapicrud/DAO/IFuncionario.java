package br.com.apijava.javaapicrud.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.apijava.javaapicrud.model.Funcionario;

public interface IFuncionario extends CrudRepository<Funcionario,Integer>{
    
}
