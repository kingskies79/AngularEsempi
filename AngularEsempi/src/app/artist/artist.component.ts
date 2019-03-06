import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private artist: any;
  constructor(private route: ActivatedRoute, private jsonp: Jsonp) {
    this.route.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {

        this.artist = res.json().results[0];

      });
    });

   }

  ngOnInit() {
  }

}
