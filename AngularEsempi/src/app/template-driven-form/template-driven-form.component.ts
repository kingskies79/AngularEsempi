import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Signup} from '../signup';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model: Signup = new Signup();
  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {
  }
  submitMethod() {
    if (this.form.valid) {
      console.log('Form submitted');
      this.form.form.reset();
    }
  }
}
