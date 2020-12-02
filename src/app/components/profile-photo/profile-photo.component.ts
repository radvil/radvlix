import { Component, Input } from '@angular/core';

@Component({
  selector: 'rad-profile-photo',
  template: `
    <div class="profile-photo-container">
      <img [errorImage]="errorImagePath" [lazyLoad]="imagePath" [alt]="imageAlt" [style.height]="imageSize" [style.width]="imageSize" />
    </div>
  `,
  styles: [`

    .profile-photo-container {
      display: flex;
      justify-content: center;
    }`,

    `.profile-photo-container img {
      min-height: 3rem;
      min-width: 3rem;
      object-fit: cover;
      margin-bottom: 1rem;
      border-radius: 50%;
    }`,

  ]
})
export class ProfilePhotoComponent {

  constructor() {
  }

  @Input() imagePath: string;
  @Input() imageAlt: string;
  @Input() imageSize: string;
  public errorImagePath = 'assets/no_image.png';

}
