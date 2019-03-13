import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {


  constructor(private el: ElementRef, private renderer: Renderer) {
    //el.nativeElement.style.backgroundColor ='grey';
    renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow');
   }

}
