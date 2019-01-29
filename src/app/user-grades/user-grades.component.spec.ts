import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGradesComponent } from './user-grades.component';

describe('UserGradesComponent', () => {
  let component: UserGradesComponent;
  let fixture: ComponentFixture<UserGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
