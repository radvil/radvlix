import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePhotoComponent } from './profile-photo.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [ProfilePhotoComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
  ],
  exports: [ProfilePhotoComponent]
})
export class ProfilePhotoModule { }
