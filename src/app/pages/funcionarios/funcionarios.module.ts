import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { FuncionarioEditComponent } from './edit/edit.component';
import { FuncionarioListComponent } from './list/list.component';
import { FuncionarioCoreComponent } from './funcionario-core/funcionario-core.component';

@NgModule({
  declarations: [FuncionarioListComponent, FuncionarioEditComponent, FuncionarioCoreComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FuncionarioListComponent
  ]
})
export class FuncionarioModule { }
