import { Component, OnInit } from '@angular/core';
import {Jsonp} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  private albums: any[];
  constructor(private router: ActivatedRoute, private jsonp: Jsonp) {
    this.router.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        console.log(res.json());
        this.albums = res.json().results.slice(1);
        console.log(this.albums);
      });
    });
   }

  ngOnInit() {
  }

}
