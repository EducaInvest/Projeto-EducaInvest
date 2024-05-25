import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TResourceComponent } from './t-resource.component';

describe('TResourceComponent', () => {
  let component: TResourceComponent;
  let fixture: ComponentFixture<TResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
