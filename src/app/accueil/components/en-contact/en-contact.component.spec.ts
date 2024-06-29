import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContactComponent } from './en-contact.component';

describe('EnContactComponent', () => {
  let component: EnContactComponent;
  let fixture: ComponentFixture<EnContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
