import {FormBuilder, FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-app',
  template: 'test.html'
})

class ModelFormComponent implements OnInit {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  
  ngOnInit(){
    this.createFormControl();
    this.createForm();

  }
  createFormControl() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.language = new FormControl('', Validators.required);
  }
  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        language: this.language
      })
    });

  }
}

