import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from './search-item';

import {Observable} from 'rxjs';




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
  search(term: string): Observable<SearchItem[]> {
   
      let url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      return this.http.get(url)
        .map( res => {
          return res.results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
       
      });
     
   }
  }



