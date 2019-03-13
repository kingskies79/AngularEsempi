import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleList: Article[];
  constructor() {
    this.articleList =  [

      new Article('Titolo primo', 'lorem primo lorem secondo', 'text'),
      new Article('Titolo Secondo', 'https://picsum.photos/200?image=0', 'img'),

    ];
  }

  ngOnInit() {
  }

}
