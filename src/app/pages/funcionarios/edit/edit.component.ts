import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioDataService } from '../shared/funcionario-data.service';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'love-funcionario-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

  funcionario: Funcionario = new Funcionario;
  key: string = '';

  constructor(private funcionarioService: FuncionarioService,
              private funcionarioDataService: FuncionarioDataService) { }

  ngOnInit() {
    this.funcionario = new Funcionario();

    this.funcionarioDataService.currentFuncionario.subscribe(data => {
      if(data.funcionario && data.key) {
        this.funcionario = new Funcionario();
        this.funcionario.nome = data.funcionario.nome;
        this.funcionario.dataAdmissao = data.funcionario.dataAdmissao;
        this.funcionario.padaria = data.funcionario.padaria;
        this.funcionario.horario = data.funcionario.horario;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if(this.key) {
      this.funcionarioService.update(this.funcionario, this.key); 
    } else {
      this.funcionarioService.insert(this.funcionario);
    }

    this.funcionario = new Funcionario();
    this.key = '';
  }
}
