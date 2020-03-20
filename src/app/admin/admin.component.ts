import { Component, OnInit } from '@angular/core';
import { Mp3httpService } from '../mp3http.service';
import { AdminLocation } from '../admin-location';
import { AdminLocations } from '../admin-locations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(/*private mp3Http: Mp3httpService*/) { }

  ngOnInit() {
/*
    const adminLocations = new AdminLocations();

    adminLocations.Locations = [
      'C:\\Users\\c084875\\SketchArea\\IntakeApplicationBuild_IIS_2',
      'C:\\Users\\c084875\\SketchArea\\ApiControllerResearch2',
      'C:\\Users\\c084875\\SketchArea\\TrrDataAnalysis'
    ];


    this.mp3Http.adminMp3s(adminLocations).subscribe(data => {
      console.log(`adminMp3s status: ${data.status}`);
    });
*/
  }
}
