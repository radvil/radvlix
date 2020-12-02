import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { CreditsComponent } from './credits.component';
import { PeopleListModule } from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: CreditsComponent,
    data: { title: 'Movie Credits' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditsRoutingModule {}

@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    MatCardModule,
    PeopleListModule,
  ],
})
export class CreditsModule {}
