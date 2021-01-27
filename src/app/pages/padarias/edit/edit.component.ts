import { Component, OnInit } from '@angular/core';
import { Padaria } from '../shared/padaria';
import { PadariaDataService } from '../shared/padaria-data.service';
import { PadariaService } from '../shared/padaria.service';

@Component({
  selector: 'love-padaria-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PadariaEditComponent implements OnInit {

  padaria: Padaria = new Padaria;
  key: string = '';

  constructor(private padariaService: PadariaService,
              private padariaDataService: PadariaDataService) { }

  ngOnInit() {
    this.padaria = new Padaria();

    this.padariaDataService.currentPadaria.subscribe(data => {
      if(data.padaria && data.key) {
        this.padaria = new Padaria();
        this.padaria.filial = data.padaria.filial;
        this.padaria.endereco = data.padaria.endereco;
        this.padaria.bairro = data.padaria.bairro;
        this.padaria.cidade = data.padaria.cidade;
        this.padaria.estado = data.padaria.estado;
        this.padaria.cep = data.padaria.cep;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if(this.key) {
      this.padariaService.update(this.padaria, this.key); 
    } else {
      this.padariaService.insert(this.padaria);
    }

    this.padaria = new Padaria();
    this.key = '';
  }
}
