import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'rad-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {

  @Input() items: Array<any>;
  @Output() showItemEvent = new EventEmitter<string>();
  public errorImagePath = 'assets/no_image.png';

  constructor() {}

  public showItem(itemId: string = ""): void {
    this.showItemEvent.emit(itemId);
  }
}
