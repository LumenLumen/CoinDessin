import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnDisplayCommComponent } from './en-display-comm.component';

describe('EnDisplayCommComponent', () => {
  let component: EnDisplayCommComponent;
  let fixture: ComponentFixture<EnDisplayCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnDisplayCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnDisplayCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
