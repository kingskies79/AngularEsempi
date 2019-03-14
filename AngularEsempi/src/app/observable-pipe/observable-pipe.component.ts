import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-observable-pipe',
  templateUrl: './observable-pipe.component.html',
  styleUrls: ['./observable-pipe.component.css']
})
export class ObservablePipeComponent implements OnInit {
 Data: number;
 observableData: any;

  subscription = null;
  constructor() {
    this.subscriptionObservable();
    this.observableData = this.getObservable();
   }

  ngOnInit() {
  }

  getObservable(){
    return Observable
    .interval(1000)
    .take(10)
    .map(v => v * v);
  }
  subscriptionObservable(){
    this.subscription = this.getObservable()
    .subscribe(v => this.Data = v);
  }
}
