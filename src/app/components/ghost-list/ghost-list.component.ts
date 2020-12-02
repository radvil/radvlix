import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-ghost-list',
  template: `
    <div class="loading-ghost">
      <div class="head"></div>

      <div class="list">
        <div *ngFor="let loop of ghostLoopCount" class="item">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./ghost-list.component.scss']
})
export class GhostListComponent implements OnInit {

  public ghostLoopCount = new Array(6);
  
  constructor() { }

  ngOnInit(): void {
  }

}
