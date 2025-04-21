import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportgiftComponent } from './supportgift.component';

describe('SupportgiftComponent', () => {
  let component: SupportgiftComponent;
  let fixture: ComponentFixture<SupportgiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportgiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportgiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
