import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchList: any;
  constructor(private searchService: SearchService) {
    this.searchList = [];
  }

  doSearch(term: string) {
    this.searchService.search(term).
      then(res => {
        const parsed = JSON.stringify(res);
        this.searchList = res;
        console.log(res);

        console.log(this.searchList);

      });
  }
  ngOnInit() {
  }

}
