import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';


import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { PadariaModule } from './pages/padarias/padaria.module';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { FuncionarioModule } from './pages/funcionarios/funcionarios.module'

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/login/dashboard/dashboard.component';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    DashboardComponent,
    SignInComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    PadariaModule,
    ProdutosModule,
    FuncionarioModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
