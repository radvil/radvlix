import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {

  public ghostItems = new Array(4);

  constructor() { }

  ngOnInit() {
    
  }

}
