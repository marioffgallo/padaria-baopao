import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password);
 }

  signInWithGoogle() {
      this.authService.signInWithGoogle();
  }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigateByUrl('dashboard');
    }
  }

  cancelarBtn() {
    this.user = {
      email: '',
      password: ''
    };
  }

}

