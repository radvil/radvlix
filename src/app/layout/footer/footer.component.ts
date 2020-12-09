import { Component, OnInit } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'rad-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.version;
  currentYear = new Date().getFullYear();

  links = [
    {
      url: 'https://www.github.com/radvil',
      iconName: 'github',
      label: 'Github',
    },
    {
      url: 'https://www.facebook.com/radvilardian',
      iconName: 'facebook',
      label: 'Facebook',
    },
    {
      url: 'https://www.twitter.com/radvilardian',
      iconName: 'twitter',
      label: 'Twitter',
    },
    {
      url: 'https://www.youtube.com/channel/UClENBr5CqVmAi0qVO2Wf12w',
      iconName: 'youtube',
      label: 'Youtube',
    },
    {
      url: 'https://www.instagram.com/radvilardian',
      iconName: 'instagram',
      label: 'Instagram',
    },
  ];

  constructor(public faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithub,
      faFacebook,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }

  ngOnInit(): void {}
}
