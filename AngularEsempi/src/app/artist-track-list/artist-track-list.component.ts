import { Component, OnInit } from '@angular/core';
import {Jsonp} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  trackList: any[];
  constructor(private route: ActivatedRoute, private json: Jsonp) { 
    this.route.parent.params.subscribe(params => {
      this.json.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        this.trackList = res.json().results.splice(1);
      });
    });
  }
  
  ngOnInit() {
  }

}
