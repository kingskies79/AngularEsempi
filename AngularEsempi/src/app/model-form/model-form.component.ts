import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  languages = [
    'italiano', 'francese', 'inglese'
  ];

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

constructor() {
}

ngOnInit() {
  this.createFormControl();
  this.createForm();

}
createFormControl() {
  this.firstName = new FormControl('', Validators.required);
  this.lastName = new FormControl('', Validators.required);
  this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
  this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  this.language = new FormControl('', Validators.required);
}
createForm() {
  this.myform = new FormGroup({
    name: new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    }),
    email: this.email,
    password: this.password,
    language: this.language
  });
}
onSubmit(){
  if(this.myform.valid){
    console.log('Form Submitted');
    this.myform.reset();
  } else {
    console.log('Form is not valid');
  }

}
}
