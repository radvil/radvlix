import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-ghost-list',
  templateUrl: './ghost-list.component.html',
  styleUrls: ['./ghost-list.component.scss']
})
export class GhostListComponent implements OnInit {

  public ghostLoopCount = new Array(12);
  
  constructor() { }

  ngOnInit(): void {
  }

}
