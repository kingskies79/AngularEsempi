import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from './search-item';





@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  results: SearchItem[];
  loading: boolean;
  apiRoot = 'https://itunes.apple.com/search';
  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }
  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(url)
        .toPromise()
        .then(
          res => {
            this.results = res['results'].map(item => {
              return new SearchItem (
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve();
            },
            msg => {
              reject(msg);
            }
          );
      });
    return promise;
    }
  }



