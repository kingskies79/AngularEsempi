import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilKeyChanged';

import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs-compat/operator/distinctUntilChanged';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      comment: this.comment,
      name: this.name,
      email: this.email
    });
    this.form.valueChanges
      .debounceTime(500)
      .distinctUntilKeyChanged('comment')
      .filter(data => this.form.valid )
      .map(data => {data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, ''); return data; })
      .map(data => {data.lastUpdateTS = new Date(); return data; })
      .subscribe(data => console.log(JSON.stringify(data)));
  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
