import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from '../shared/models/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public stateUser: any;

  constructor(public afAuth: AngularFireAuth,
              public router: Router,
              public db: AngularFireDatabase,
              public ngZone: NgZone) { 

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.stateUser = user.email ? true : false;
          //console.log('Estado do stateUser é ' + this.stateUser);
        } else {
          this.stateUser = false;
        }
      });
  }

  signInRegular(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.ngZone.run(() => {
        console.log("Usuário autenticado com sucesso");
        this.router.navigateByUrl('dashboard');
      })
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  signInWithGoogle() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then(() => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
    }).catch((error) => {
      window.alert(error)
    })
  }

  updatingDatabase(userData: User){
    var ref = this.db.database.ref();
    var key = userData.userUid;
    var usersRef = ref.child('users');

    usersRef.child(key!).update(userData).then((result: any) =>{
      console.log('Dados do usuário salvos no Database!');
    });

/*     this.db.list('users').push(userData)
    .then((result: any) => {
      console.log('Dados do usuário salvos no Database!');
      console.log(result.key);
    }); */
  }

  get isLoggedIn() {
    return (this.stateUser);
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.stateUser = false;
      this.router.navigate(['sign-in']);
    })
  }
}
