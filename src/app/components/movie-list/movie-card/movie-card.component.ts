import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, Tv } from 'src/app/interfaces';

@Component({
  selector: 'rad-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {

  @Input() public movie: Movie | Tv;
  @Input() public listType: string;
  @Input() public containerEl: any;
  public errorImagePath = 'assets/no_image.png';

  constructor(private router: Router) { }

  public showMovieDetail(movieId: number): void {
    const preLink = this.listType == 'TVS' ? 'tv-detail' : 'movie-detail';
    this.router.navigate([preLink, movieId]);
  }

  public setMovieTitle(movie: any): string {
    switch(this.listType) {
      case "MOVIES": return movie.title;
      case "TVS": return movie.name;
      default: return "";
    }
  }

  public setMovieReleaseDate(movie: any): string {
    switch(this.listType) {
      case "MOVIES": return movie.releaseDate;
      case "TVS": return movie.firstAirDate;
      default: return "";
    }
  }

}
