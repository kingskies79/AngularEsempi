import { Component, OnInit } from '@angular/core';
import { SignUp } from '../sign-up';

@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.css']
})
export class TemplateForm2Component implements OnInit {
model: SignUp;
  constructor() {
    this.model = new SignUp('fabio', 'leotta');
   }

  ngOnInit() {
  }

}
