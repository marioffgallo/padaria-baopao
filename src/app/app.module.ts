import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PadariaEditComponent } from './pages/padarias/edit/edit.component';
import { PadariaListComponent } from './pages/padarias/list/list.component';
import { DashboardComponent } from './pages/login/dashboard/dashboard.component';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { PadariaCoreComponent } from './pages/padarias/padaria-core/padaria-core.component';
import { ProdutosCoreComponent } from './pages/produtos/produtos-core/produtos-core.component';
import { ProdutoEditComponent } from './pages/produtos/edit/edit.component';
import { ProdutoListComponent } from './pages/produtos/list/list.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    PadariaEditComponent,
    PadariaListComponent,
    DashboardComponent,
    SignInComponent,
    PadariaCoreComponent,
    ProdutosCoreComponent,
    ProdutoEditComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
