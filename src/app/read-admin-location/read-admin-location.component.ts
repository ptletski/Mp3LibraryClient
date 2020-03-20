import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { IAdminLocation } from '../iadmin-location.intf';
import * as Actions from './../actions/client.actions';

@Component({
  selector: 'app-read-admin-location',
  templateUrl: './read-admin-location.component.html',
  styleUrls: ['./read-admin-location.component.scss']
})
export class ReadAdminLocationComponent implements OnInit {
  adminLocations: Observable<IAdminLocation[]>;

  constructor(private store: Store<AppState>) {
    this.adminLocations = store.select('adminLocation');
  }

  deleteLocation(index: number): void {
    this.store.dispatch(new Actions.RemoveLocation(index));
  }

  ngOnInit(): void {
  }
}
