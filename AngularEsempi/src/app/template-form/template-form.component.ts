import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SignUp } from '../sign-up';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('refForm') myForm: FormGroup;
  model = new SignUp();
  languages: any [];

  constructor() {
    this.languages = ['Italiano', 'Francese', 'Inglese'];

  }

  ngOnInit() {

  }
onSubmit(form) {
  if(form.valid){
    console.log('Form submitted');
    form.reset();
  } else {
    console.log('Form not submitted');
  }


  if(this.myForm.valid) {
    console.log('Form submitted');
    this.myForm.reset();
  } else {
    console.log('Form not submitted');
  }
}
}
