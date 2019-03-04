import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  albums: any[];
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        this.albums = res.json().results.splice(1);

      });
    });
   }

  ngOnInit() {
  }

}
