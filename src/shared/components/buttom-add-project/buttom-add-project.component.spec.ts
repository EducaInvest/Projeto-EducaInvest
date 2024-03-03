import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomAddProjectComponent } from './buttom-add-project.component';

describe('ButtomAddProjectComponent', () => {
  let component: ButtomAddProjectComponent;
  let fixture: ComponentFixture<ButtomAddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomAddProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtomAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
