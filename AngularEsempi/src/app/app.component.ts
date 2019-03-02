import 'rxjs-compat/add/operator/debounceTime';
import 'rxjs-compat/add/operator/distinctUntilChanged';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/switchMap';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { ItunesService } from './itunes.service';
import { FormControl} from '@angular/forms';
import { SearchItem } from './search-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: ItunesService) {   }

  ngOnInit() {
    this.searchField = new FormControl();
    
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.itunes.search(term));

    }



        doSearch(term: string) {     this.itunes.search(term)   }  
}
