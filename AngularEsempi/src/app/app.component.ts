import { Component } from '@angular/core';

import { ItunesService } from './itunes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;
  constructor(private itunes: ItunesService) {   }

  doSearch(term: string) {     this.loading = true;     this.itunes.search(term).then(() => this.loading = false)   } 
}
