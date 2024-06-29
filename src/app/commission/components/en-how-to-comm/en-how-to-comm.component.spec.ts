import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHowToCommComponent } from './en-how-to-comm.component';

describe('EnHowToCommComponent', () => {
  let component: EnHowToCommComponent;
  let fixture: ComponentFixture<EnHowToCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnHowToCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnHowToCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
