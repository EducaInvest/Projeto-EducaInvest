import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramSectionComponent } from './cronogram-section.component';

describe('CronogramSectionComponent', () => {
  let component: CronogramSectionComponent;
  let fixture: ComponentFixture<CronogramSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronogramSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronogramSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
