import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as Actions from './../actions/client.actions';

@Component({
  selector: 'app-create-admin-location',
  templateUrl: './create-admin-location.component.html',
  styleUrls: ['./create-admin-location.component.scss']
})
export class CreateAdminLocationComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  addAdminLocation(locationName: string): void {
    this.store.dispatch(new Actions.AddLocation({Location: locationName}));
  }
}
