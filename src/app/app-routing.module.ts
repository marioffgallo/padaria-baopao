import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { DashboardComponent } from './pages/login/dashboard/dashboard.component';
import { PadariaCoreComponent } from './pages/padarias/padaria-core/padaria-core.component';
import { ProdutosCoreComponent } from './pages/produtos/produtos-core/produtos-core.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'padarias', component: PadariaCoreComponent},
  { path: 'produtos', component: ProdutosCoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
