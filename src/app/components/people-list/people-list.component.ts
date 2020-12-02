import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces';

@Component({
  selector: 'rad-people-list',
  template: `
    <ul class="people-list-container">
      <li class="person" *ngFor="let person of people">
        <rad-person [person]="person"></rad-person>
      </li>
    </ul>
  `,
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {

  @Input() people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
