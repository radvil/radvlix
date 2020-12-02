import { Component } from '@angular/core';

@Component({
  selector: 'rad-search-ghost',
  template: `
    <ul class="ghost-grid">
      <li *ngFor="let item of ghostItems">
        <div class="image">
        </div>
        <div class="meta">
          <div class="title"></div>
          <div class="subtitle"></div>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./search-ghost.component.scss']
})
export class SearchGhostComponent {

  public ghostItems = new Array(6);

  constructor() { }

}
