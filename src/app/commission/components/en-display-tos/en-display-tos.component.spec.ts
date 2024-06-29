import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnDisplayTosComponent } from './en-display-tos.component';

describe('EnDisplayTosComponent', () => {
  let component: EnDisplayTosComponent;
  let fixture: ComponentFixture<EnDisplayTosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnDisplayTosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnDisplayTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
