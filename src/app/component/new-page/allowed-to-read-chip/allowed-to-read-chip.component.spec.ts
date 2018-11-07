import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedToReadChipComponent } from './allowed-to-read-chip.component';

describe('AllowedToReadChipComponent', () => {
  let component: AllowedToReadChipComponent;
  let fixture: ComponentFixture<AllowedToReadChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowedToReadChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowedToReadChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
