import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommComponent } from './display-comm.component';

describe('DisplayCommComponent', () => {
  let component: DisplayCommComponent;
  let fixture: ComponentFixture<DisplayCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCommComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
