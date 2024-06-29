import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRWebsiteMAJComponent } from './website-maj.component';

describe('WebsiteMAJComponent', () => {
  let component: FRWebsiteMAJComponent;
  let fixture: ComponentFixture<FRWebsiteMAJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FRWebsiteMAJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FRWebsiteMAJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
