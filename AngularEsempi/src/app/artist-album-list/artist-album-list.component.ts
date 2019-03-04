import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent  implements OnInit {
  albumList: any[];

  constructor(private route: ActivatedRoute, private jsonp: Jsonp) {
     this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        this.albumList = res.json().results.slice(1);
        console.log('AlbumList' + this.albumList);
      });
    });
  }

  ngOnInit() {
  }

}
