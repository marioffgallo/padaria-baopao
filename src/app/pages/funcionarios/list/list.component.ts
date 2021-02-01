import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioDataService } from '../shared/funcionario-data.service';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'love-funcionario-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios!: Observable<any>;

  constructor(private funcionarioService: FuncionarioService,
              private funcionarioDataService: FuncionarioDataService,
              public router: Router) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getAll();
  }

  delete(key: string) {
    this.funcionarioService.delete(key);
  }

  edit(funcionario: Funcionario, key: string) {
    this.funcionarioDataService.changeFuncionario(funcionario, key);
  }
}
