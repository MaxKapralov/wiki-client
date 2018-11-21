import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMenuComponent } from './article-menu.component';

describe('ArticleMenuComponent', () => {
  let component: ArticleMenuComponent;
  let fixture: ComponentFixture<ArticleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
