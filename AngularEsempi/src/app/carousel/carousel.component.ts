import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;
  @ViewChild('title') title: ElementRef;

  @Input() delay: number;
ngAfterViewInit(){
  this.title.nativeElement.textContent="Nuove Carousel";
}

  ngAfterContentInit() {

    let carouselItems = this.carouselItemsList.toArray();
    console.log(carouselItems);
    let count = 0;
    let max = carouselItems.length;
    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }
}
