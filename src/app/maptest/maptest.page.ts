import { Component, OnInit } from '@angular/core';
import { mmi } from 'mapmyindia-map-cordova-ionic-beta';

@Component({
  selector: 'app-maptest',
  templateUrl: './maptest.page.html',
  styleUrls: ['./maptest.page.scss'],
})
export class MaptestPage implements OnInit {

  maps: any;

  constructor() {
    this.maps = new mmi();
  }

  ngOnInit() {
    this.maps.loadMaps('map', {
      key: 'iod3nl28u9ufdzsexhfd6lwbavhwefg8',
      zoom: {
        control: true
      },
      location: {
        control: true,
        initial: true,
        bounds: true
      }
    });
  }

}
