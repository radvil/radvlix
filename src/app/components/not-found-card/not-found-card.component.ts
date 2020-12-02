import { Component, Input } from '@angular/core';

@Component({
  selector: 'rad-not-found-card',
  template: `
    <div id="not-found" class="container">
      <h1>No result found for</h1>
      <h1 class="search-term">{{ searchTerm }}</h1>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 15rem;
      border-radius: 2rem;
      padding: 2rem;
      margin-top: 1rem;
      color: white;
    
      h1 {
        font-size: 1.2rem;
        margin-bottom: 0;
        font-weight: lighter;
    
        &.search-term {
          font-size: 2.2rem;
          color: #dd0031;
          font-weight: bolder;
        }
      }
    }
  `]
})
export class NotFoundCardComponent {

  @Input() searchTerm: string;

  constructor() { }

}
