import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { PersonComponent } from './person/person.component';
import { ProfilePhotoModule } from '../profile-photo/profile-photo.module';



@NgModule({
  declarations: [PeopleListComponent, PersonComponent],
  imports: [
    CommonModule,
    ProfilePhotoModule,
  ],
  exports: [PeopleListComponent, PersonComponent]
})
export class PeopleListModule { }
