import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWebComponent } from './article-web.component';

describe('ArticleWebComponent', () => {
  let component: ArticleWebComponent;
  let fixture: ComponentFixture<ArticleWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
