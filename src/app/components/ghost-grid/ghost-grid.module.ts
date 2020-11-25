import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostGridComponent } from './ghost-grid.component';



@NgModule({
  declarations: [GhostGridComponent],
  imports: [
    CommonModule
  ],
  exports: [GhostGridComponent]
})
export class GhostGridModule { }
