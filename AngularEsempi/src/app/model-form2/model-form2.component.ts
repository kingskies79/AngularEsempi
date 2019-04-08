import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupName} from '@angular/forms';

@Component({
  selector: 'app-model-form2',
  templateUrl: './model-form2.component.html',
  styleUrls: ['./model-form2.component.css']
})
export class ModelForm2Component implements OnInit {

  constructor() {

   }
   myform: FormGroup;
   firstName: FormControl;
   lastName: FormControl;

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  createFormControl() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);


  }
  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName : this.firstName,
        lastName: this.lastName
      })
    });
  }

}
