import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Padaria } from './padaria';

@Injectable({
  providedIn: 'root'
})
export class PadariaDataService {

  private padariaSource = new BehaviorSubject({ padaria: null as any, key: '' });

  currentPadaria = this.padariaSource.asObservable();

  constructor() { }

  changePadaria(padaria: Padaria, key: string) {
    this.padariaSource.next({ padaria: padaria, key: key });
  }
}
