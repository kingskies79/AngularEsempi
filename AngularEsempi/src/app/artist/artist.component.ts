import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private artist: any;
  constructor(private router: ActivatedRoute, private jsonp: Jsonp) { 
    this.router.params.subscribe(params => {
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
