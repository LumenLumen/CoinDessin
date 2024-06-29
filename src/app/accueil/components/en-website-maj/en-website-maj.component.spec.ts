import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnWebsiteMAJComponent } from './en-website-maj.component';

describe('EnWebsiteMAJComponent', () => {
  let component: EnWebsiteMAJComponent;
  let fixture: ComponentFixture<EnWebsiteMAJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnWebsiteMAJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnWebsiteMAJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
