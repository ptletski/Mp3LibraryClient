import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { skip } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { IAdminLocation } from '../iadmin-location.intf';
import { Mp3httpService } from '../mp3http.service';
import { AdminLocations } from '../admin-locations';

@Component({
  selector: 'app-perform-admin',
  templateUrl: './perform-admin.component.html',
  styleUrls: ['./perform-admin.component.scss']
})
export class PerformAdminComponent implements OnInit {
  adminLocations: Observable<IAdminLocation[]>;

  constructor(private stateStore: Store<AppState>, private mp3Http: Mp3httpService) {
    this.adminLocations = stateStore.select('adminLocation');
  }

  ngOnInit() {
  }

  async performAdmin() {
    /*
    const mp3ServiceData: AdminLocations = new AdminLocations();

    this.adminLocations.subscribe(
      locations => {
        locations.forEach(location => {
          console.log(location.Location);
          mp3ServiceData.Locations.push(location.Location);
        });
      }
    );

    this.mp3Http.adminMp3s(mp3ServiceData).subscribe(data => {
      console.log(`adminMp3s status: ${data.status}`);
    });
    */
  }
}

