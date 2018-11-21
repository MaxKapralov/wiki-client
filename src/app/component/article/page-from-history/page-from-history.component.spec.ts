import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFromHistoryComponent } from './page-from-history.component';

describe('PageFromHistoryComponent', () => {
  let component: PageFromHistoryComponent;
  let fixture: ComponentFixture<PageFromHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFromHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFromHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
