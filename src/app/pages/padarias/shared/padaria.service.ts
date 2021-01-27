import { Injectable } from '@angular/core';
import { Padaria } from './padaria';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PadariaService {

  constructor(private db: AngularFireDatabase) { }

  insert(padaria: Padaria){
    this.db.list('padarias').push(padaria)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(padaria: Padaria, key: string) {
    this.db.list('padarias').update(key, padaria)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){
    return this.db.list('padarias')
      .snapshotChanges()
      .pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
          })
      );
  }

  delete(key: string){
    this.db.object(`padarias/${key}`).remove();
  }
}
