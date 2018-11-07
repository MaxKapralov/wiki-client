import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectParameterComponent } from './select-parameter.component';

describe('SelectParameterComponent', () => {
  let component: SelectParameterComponent;
  let fixture: ComponentFixture<SelectParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
