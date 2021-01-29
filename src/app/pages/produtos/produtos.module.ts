import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProdutosCoreComponent } from './produtos-core/produtos-core.component';
import { ProdutoEditComponent } from './edit/edit.component';
import { ProdutoListComponent } from './list/list.component';

@NgModule({
  declarations: [ProdutosCoreComponent, ProdutoEditComponent, ProdutoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ProdutoListComponent
  ]
})
export class ProdutosModule { }
