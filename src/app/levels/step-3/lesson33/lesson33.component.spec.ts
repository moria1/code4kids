import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson33Component } from './lesson33.component';

describe('Lesson33Component', () => {
  let component: Lesson33Component;
  let fixture: ComponentFixture<Lesson33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
