import { Injectable } from '@angular/core';
import {SearchItem} from './search-item';
import {Jsonp} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchList: SearchItem [];
  apiUrl = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) {
    
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      let url = `${this.apiUrl}?term=${term}}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(url)
      .toPromise()
      .then(res => {
        this.searchList = res.json().results.map(item => {
          return new SearchItem (
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
        resolve(this.searchList);
      }, msg => {
        reject(msg);
      });
    });
  }
}
