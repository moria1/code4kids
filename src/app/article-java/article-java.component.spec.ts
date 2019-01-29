import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleJavaComponent } from './article-java.component';

describe('ArticleJavaComponent', () => {
  let component: ArticleJavaComponent;
  let fixture: ComponentFixture<ArticleJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
