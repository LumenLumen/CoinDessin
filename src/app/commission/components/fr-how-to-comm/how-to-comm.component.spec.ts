import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToCommComponent } from './how-to-comm.component';

describe('HowToCommComponent', () => {
  let component: HowToCommComponent;
  let fixture: ComponentFixture<HowToCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
