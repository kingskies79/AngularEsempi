import { Component, OnInit, Injectable } from '@angular/core';
import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading = false;
  results: any;

  constructor( private search: SearchService) {
    this.results = [];
     }

  ngOnInit() {
  }

  onSearch(term: string) {
    this.loading = true;
    this.search.onSearch(term).then(val => {this.loading = false; this.results = val; });
  }
}

