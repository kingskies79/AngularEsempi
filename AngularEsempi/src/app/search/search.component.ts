import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {SearchItem} from '../search-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchList: any;
  constructor(private search: SearchService) {


   }
   doSearch(term: string) {
    this.search.search(term).
      then(res => {

        this.searchList = res;
        console.log(this.searchList);

      });
  }
  ngOnInit() {
  }

}
