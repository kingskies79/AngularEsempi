import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { SearchItem } from './search-item';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  itemList: SearchItem[];
  apiUrl = 'https://itunes.apple.com/search';
  loading: boolean;
  constructor(private jsonp: Jsonp) {
    this.loading = false;
    this.itemList = [];
  }
  search(term: string) {
    return new Promise((resolve, reject) => {
      this.jsonp.request(`${this.apiUrl}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          this.itemList = res.json().results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl60,
              item.artistId
            );
          });

          resolve(this.itemList);
        },
          msg => {
            reject(msg);
          });

    });
  }
}
