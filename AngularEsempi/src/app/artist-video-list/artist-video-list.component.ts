import { Component, OnInit } from '@angular/core';
import {Jsonp} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-video-list',
  templateUrl: './artist-video-list.component.html',
  styleUrls: ['./artist-video-list.component.css']
})
export class ArtistVideoListComponent implements OnInit {
videoList: any[];
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        this.videoList = res.json().results.splice(1);
      });
    });
  }

  ngOnInit() {
  }

}
