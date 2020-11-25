import { Component } from '@angular/core';

@Component({
  selector: 'rad-ghost-grid',
  templateUrl: './ghost-grid.component.html',
  styleUrls: ['./ghost-grid.component.scss']
})
export class GhostGridComponent {

  public ghostItems = new Array(4);

  constructor() { }

}
