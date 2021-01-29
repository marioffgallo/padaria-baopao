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
  public userDetails: any;

  constructor(public afAuth: AngularFireAuth,
              public router: Router,
              public db: AngularFireDatabase,
              public ngZone: NgZone) { 

      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userDetails = user;
          localStorage.setItem('user', JSON.stringify(this.userDetails));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      });
  }

  signInRegular(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log("Usuário autenticado com sucesso");
        this.router.navigateByUrl('dashboard');
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
    this.db.list('users').push(userData)
    .then((result: any) => {
      console.log('Dados do usuário salvos no Database!');
      console.log(result.key);
    });
  }

  get isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}
