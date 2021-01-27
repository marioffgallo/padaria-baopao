import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }

  insert(produto: Produto){
    this.db.list('produtos').push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(produto: Produto, key: string) {
    this.db.list('produtos').update(key, produto)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){
    return this.db.list('produtos')
      .snapshotChanges()
      .pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
          })
      );
  }

  delete(key: string){
    this.db.object(`produtos/${key}`).remove();
  }
}