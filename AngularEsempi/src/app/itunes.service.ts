import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchItem} from './search-item';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;
  constructor(private http: HttpClient) { 
    this.results = [];
    this.loading = false;
  }

  search(term: string){
    let promise = new Promise((resolve, reject) => {
      let url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(url)
      .toPromise()
      .then(
        dati => {
          console.log(dati);
          this.results = dati.results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          console.log(this.results);
          resolve();
      },
      msg => {
        reject(console.log('msg' + msg));
      });
    });
    return promise;
  }


}
