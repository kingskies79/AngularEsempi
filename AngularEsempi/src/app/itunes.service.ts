import { Injectable } from '@angular/core';

import { SearchItem } from './search-item';

import { Jsonp } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  results: SearchItem[];
  loading: boolean;
  apiRoot = 'https://itunes.apple.com/search';
  constructor(private jsonp: Jsonp) {
    this.results = [];
    this.loading = false;
  }
  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
        .toPromise()
        .then(
          res => {
            this.results = res.json().results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve(this.results);
          },
          msg => {
            reject(msg);
          }
        );
    });
  }
}



