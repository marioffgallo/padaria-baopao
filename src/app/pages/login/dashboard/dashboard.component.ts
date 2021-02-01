import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { User } from 'src/app/shared/models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public userToDb: User = {
    displayName: '',
    userUid: null,
    email: '',
    photoURL: '',
    userCategory: 'Indefinido',
    isAdmin: false
  };

  constructor(public authService: AuthService,
              public db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { 
              }

  ngOnInit() {

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        this.userToDb.displayName = res.displayName != null && res.displayName != undefined ? res.displayName : "Usuário";
        this.userToDb.email = res.email;
        this.userToDb.userUid = res.uid;
        this.userToDb.photoURL = res.photoURL;

        //this.upDatabase(this.userToDb);
      } else {
        console.log('user not logged in');
      }
    });
  }

  upDatabase(userToDb: User){

    this.authService.updatingDatabase(userToDb);
  }
  
}