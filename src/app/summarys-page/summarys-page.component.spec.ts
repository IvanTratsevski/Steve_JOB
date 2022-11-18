import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarysPageComponent } from './summarys-page.component';

describe('SummarysPageComponent', () => {
  let component: SummarysPageComponent;
  let fixture: ComponentFixture<SummarysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarysPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummarysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
