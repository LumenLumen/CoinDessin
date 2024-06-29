import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: FRContactComponent;
  let fixture: ComponentFixture<FRContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FRContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FRContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
