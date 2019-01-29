import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesBarComponent } from './pictures-bar.component';

describe('PicturesBarComponent', () => {
  let component: PicturesBarComponent;
  let fixture: ComponentFixture<PicturesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
