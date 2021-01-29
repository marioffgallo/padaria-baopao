import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { PadariaEditComponent } from './edit/edit.component';
import { PadariaListComponent } from './list/list.component';
import { PadariaCoreComponent } from './padaria-core/padaria-core.component';

@NgModule({
  declarations: [PadariaListComponent, PadariaEditComponent, PadariaCoreComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PadariaListComponent
  ]
})
export class PadariaModule { }
