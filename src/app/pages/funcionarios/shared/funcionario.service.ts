import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private db: AngularFireDatabase) { }

  insert(funcionario: Funcionario){
    this.db.list('funcionarios').push(funcionario)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(funcionario: Funcionario, key: string) {
    this.db.list('funcionarios').update(key, funcionario)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll(){
    return this.db.list('funcionarios')
      .snapshotChanges()
      .pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
          })
      );
  }

  delete(key: string){
    this.db.object(`funcionarios/${key}`).remove();
  }
}
