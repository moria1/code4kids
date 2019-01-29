import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson32Component } from './lesson32.component';

describe('Lesson32Component', () => {
  let component: Lesson32Component;
  let fixture: ComponentFixture<Lesson32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
