import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get isGenresLoading(): boolean {
    return true;
  }

}
