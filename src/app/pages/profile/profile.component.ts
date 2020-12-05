import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'rad-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public currentUser$: Observable<any>;

  constructor(private _authSrv: AuthService) { }

  ngOnInit(): void {
    this.currentUser$ = this._authSrv.user$;
  }

  public signOut(): void {
    this._authSrv.signOut();
  }

}
