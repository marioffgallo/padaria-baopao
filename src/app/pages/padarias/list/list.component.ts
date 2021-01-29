import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Padaria } from '../shared/padaria';
import { PadariaDataService } from '../shared/padaria-data.service';
import { PadariaService } from '../shared/padaria.service';

@Component({
  selector: 'love-padaria-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PadariaListComponent implements OnInit {
  padarias!: Observable<any>;

  constructor(private padariaService: PadariaService,
              private padariaDataService: PadariaDataService,
              public router: Router) { }

  ngOnInit() {
    this.padarias = this.padariaService.getAll();
  }

  delete(key: string) {
    this.padariaService.delete(key);
  }

  edit(padaria: Padaria, key: string) {
    this.padariaDataService.changePadaria(padaria, key);
  }
}
