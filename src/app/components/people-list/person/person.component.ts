import { Component, Input } from '@angular/core';
import { Person } from 'src/app/interfaces';

@Component({
  selector: 'rad-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {

  @Input() person: Person;

  constructor() { console.log('person', this.person) }
}
