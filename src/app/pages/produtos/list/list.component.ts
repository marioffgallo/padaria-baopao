import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../shared/produto';
import { ProdutoDataService } from '../shared/produto-data.service';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'love-produto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ProdutoListComponent implements OnInit {
  produtos!: Observable<any>;

  constructor(private produtoService: ProdutoService,
              private produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
  }

  delete(key: string) {
    this.produtoService.delete(key);
  }

  edit(produto: Produto, key: string) {
    this.produtoDataService.changeProduto(produto, key);
  }
}