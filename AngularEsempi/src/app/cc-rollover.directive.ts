import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ccRollover]'
})
export class CcRolloverDirective implements OnInit {
@Input('ccRollover') config = {
  init: '',
  over: ''
};
@HostBinding('src') private imagePath: string;
@HostListener('mouseover') onmouseover() {
  this.imagePath = this.config.over;
}
@HostListener('mouseout') onmouseout() {
  this.imagePath = this.config.init;
}
  constructor() { }
ngOnInit() {
  this.imagePath = this.config.init;
}
}
