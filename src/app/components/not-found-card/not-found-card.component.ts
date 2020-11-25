import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rad-not-found-card',
  templateUrl: './not-found-card.component.html',
  styleUrls: ['./not-found-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundCardComponent {

  @Input() searchTerm: string;

  constructor() { }

}
