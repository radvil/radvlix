import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Tv } from 'src/app/interfaces';
import { TvsService } from 'src/app/services';

@Component({
  selector: 'rad-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  constructor(private tvSrv: TvsService) {}

  public popularTvs: Tv[] = [];
  public topRatedTvs: Tv[] = [];
  public onGoingTvs: Tv[] = [];
  private subs = new Subscription();

  ngOnInit(): void {
    this.getPopularTvs();
    this.getOnGoingTvs();
    this.getTopRatedTvs();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getPopularTvs(): void {
    this.subs.add(
      this.tvSrv
        .getPopularTvs()
        .subscribe((data) => (this.popularTvs = data))
    );
  }

  private getTopRatedTvs(): void {
    this.subs.add(
      this.tvSrv
        .getTopRatedTvs()
        .subscribe((data) => (this.topRatedTvs = data))
    );
  }

  private getOnGoingTvs(): void {
    this.subs.add(
      this.tvSrv
        .getOnGoingTvs()
        .subscribe((data) => (this.onGoingTvs = data))
    );
  }

  get isLoading(): boolean {
    return (
      this.isPopularTvsLoading &&
      this.isTopRatedTvsLoading &&
      this.isOnGoingTvsLoading
    );
  }

  get isPopularTvsLoading(): boolean {
    return this.popularTvs.length <= 0;
  }

  get isTopRatedTvsLoading(): boolean {
    return this.topRatedTvs.length <= 0;
  }

  get isOnGoingTvsLoading(): boolean {
    return this.onGoingTvs.length <= 0;
  }
}
