import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';



@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @Input('ccCardHover') config = {
    querySelector: '.card-text'
  };
  @HostBinding('style.background' ) private ishovering= 'red'  ;
  constructor(private el: ElementRef, private render: Renderer) {
    render.setElementStyle(el.nativeElement,'background-color', 'yellow');
  }
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.render.setElementStyle(part, 'display', 'block');
    this.ishovering =  'green';
    }
    @HostListener('mouseout') onMouseOut() {
      let part = this.el.nativeElement.querySelector('.card-text');
      this.render.setElementStyle(part, 'display', 'none');
      this.ishovering = 'white';
      }

}
