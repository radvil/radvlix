import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rad-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {

  @Input() item: any;
  @Output() showItemEvent = new EventEmitter<string>();
  public errorImagePath = 'assets/no_image.png';

  constructor() { }

  public showItem(itemId: string) {
    this.showItemEvent.emit(itemId);
  }

}
