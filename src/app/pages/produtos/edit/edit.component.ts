import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoDataService } from '../shared/produto-data.service';
import { ProdutoService } from '../shared/produto.service';


@Component({
  selector: 'love-produto-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto;
  key: string = '';

  constructor(private produtoService: ProdutoService,
              private produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produto = new Produto();

    this.produtoDataService.currentProduto.subscribe(data => {
      if(data.produto && data.key) {
        this.produto = new Produto();
        this.produto.titulo = data.produto.titulo;
        this.produto.descricao = data.produto.descricao;
        this.produto.codBarra = data.produto.codBarra;
        this.produto.validade = data.produto.validade;
        this.produto.padaria = data.produto.padaria;
        this.produto.quantidade = data.produto.quantidade;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if(this.key) {
      this.produtoService.update(this.produto, this.key); 
    } else {
      this.produtoService.insert(this.produto);
    }

    this.produto = new Produto();
    this.key = '';
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}

