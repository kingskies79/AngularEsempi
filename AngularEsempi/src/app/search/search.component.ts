import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: FormControl;
  listTerm: any[];
  constructor() {
    this.listTerm = [];

  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(term => this.listTerm.push(term));
  }

}
