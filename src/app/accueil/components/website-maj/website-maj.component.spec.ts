import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMAJComponent } from './website-maj.component';

describe('WebsiteMAJComponent', () => {
  let component: WebsiteMAJComponent;
  let fixture: ComponentFixture<WebsiteMAJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteMAJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteMAJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
