import { Component } from '@angular/core';

@Component({
  selector: 'rad-search-ghost',
  templateUrl: './search-ghost.component.html',
  styleUrls: ['./search-ghost.component.scss']
})
export class SearchGhostComponent {

  public ghostItems = new Array(6);

  constructor() { }

}
