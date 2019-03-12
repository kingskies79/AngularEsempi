import { Injectable } from '@angular/core';
import { SearchItem } from './search-item';
import { Jsonp } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  loading: boolean;
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  constructor(private jsonp: Jsonp) {
    this.results =  [];
    this.loading = false;
  }


onSearch(term: string) {
  return new Promise((resolve, reject) => {
    this.results =  [];
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    this.jsonp.request(apiURL)
      .toPromise()
      .then(res => {
        this.results = res.json().results;
        resolve(this.results);
      }, msg => {
        reject(msg);
      }
      );
  });

}
}
