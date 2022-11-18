import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryLabelComponent } from './summary-label.component';

describe('SummaryLabelComponent', () => {
  let component: SummaryLabelComponent;
  let fixture: ComponentFixture<SummaryLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
