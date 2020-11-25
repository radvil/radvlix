import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostListComponent } from './ghost-list.component';



@NgModule({
  declarations: [GhostListComponent],
  imports: [
    CommonModule
  ],
  exports: [GhostListComponent]
})
export class GhostListModule { }
