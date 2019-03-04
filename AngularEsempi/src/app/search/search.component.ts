import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../itunes.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private loading = false;
  constructor(private itunes: ItunesService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params =>{
      console.log('params ' + params['term']);
      if (params['term']){
        this.doSearch(params['term']);
      }
    }); 
   }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(val => {this.loading = false; console.log(val); });
  } 

  ngOnInit() {
  }
  onSearch(term: string) { console.log('OnSearch');  this.router.navigate(['search', {term: term}]);  }

}
