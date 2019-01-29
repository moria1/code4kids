import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSqlComponent } from './article-sql.component';

describe('ArticleSqlComponent', () => {
  let component: ArticleSqlComponent;
  let fixture: ComponentFixture<ArticleSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
