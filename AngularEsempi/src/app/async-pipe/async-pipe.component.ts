import { Component, OnInit } from '@angular/core';
import 'rxjs/observable';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
   pipeAsync: any;
   pipe: any;

  constructor() {
    this.getAsyncPipe().then(val => this.pipe = val);
    this.pipeAsync = this.getAsyncPipe();

   }

  getAsyncPipe() {
    return new Promise((resolve, reject) => {
        resolve('Buongiorno AsyncPipe');
    });
  }
  ngOnInit() {
  }

}
