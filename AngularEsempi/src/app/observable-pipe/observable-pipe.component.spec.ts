import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePipeComponent } from './observable-pipe.component';

describe('ObservablePipeComponent', () => {
  let component: ObservablePipeComponent;
  let fixture: ComponentFixture<ObservablePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
