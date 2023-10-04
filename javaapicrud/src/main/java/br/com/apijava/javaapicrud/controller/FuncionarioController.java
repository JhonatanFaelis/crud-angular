package br.com.apijava.javaapicrud.controller;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.apijava.javaapicrud.DAO.IFuncionario;
import br.com.apijava.javaapicrud.model.Funcionario;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@CrossOrigin("*")
@RequestMapping("/funcionario")
@ApiResponse
public class FuncionarioController {

    @Autowired
    private IFuncionario DAO;

    @GetMapping("/listar")
    public List<Funcionario> listarFuncionarios() {
        return (List<Funcionario>) DAO.findAll();
    }

     @GetMapping("/{id}")
    public Optional<Funcionario> getById(@PathVariable Integer id) {
        Optional<Funcionario> funcionario = DAO.findById(id);
        return funcionario;
    }

    @PostMapping
    public Funcionario cadastrarFuncionario(@RequestBody Funcionario funcionario){
        Funcionario funcionarioNovo = DAO.save(funcionario);
        return funcionarioNovo;
    }

     @PutMapping("/{id}")
    public Funcionario alterarFuncionario(@RequestBody Funcionario funcionario){
        Funcionario funcionarioAlterar = DAO.save(funcionario);
        return funcionarioAlterar;
    }

    @DeleteMapping("/{id}")
    public Optional<Funcionario> deletarUsuario(@PathVariable Integer id){
        Optional<Funcionario> funcionarioDeletado = DAO.findById(id);
        DAO.deleteById(id);
        return funcionarioDeletado;

    }

}

