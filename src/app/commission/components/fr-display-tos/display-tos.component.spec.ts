import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTOSComponent } from './display-tos.component';

describe('DisplayTOSComponent', () => {
  let component: DisplayTOSComponent;
  let fixture: ComponentFixture<DisplayTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTOSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
