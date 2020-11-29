import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, Tv } from 'src/app/interfaces';

@Component({
  selector: 'rad-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() public items: Array<Movie | Tv>;
  @Input() public itemsType: string;
  @Input() public itemsHeadText: string;
  public errorImagePath = 'assets/no_image.jpg';

  ngOnInit(): void {
  }

  public showItemDetail(itemId: string): void {
    const preLink = this.itemsType == 'TVS' ? 'tv-detail' : 'movie-detail';
    this.router.navigate([preLink, itemId]);
  }

  public setTitle(item: any): string {
    switch(this.itemsType) {
      case "MOVIES": return item.title;
      case "TVS": return item.name;
      default: return "";
    }
  }

  public setReleaseDate(item: any): string {
    switch(this.itemsType) {
      case "MOVIES": return item.releaseDate;
      case "TVS": return item.firstAirDate;
      default: return "";
    }
  }

}
