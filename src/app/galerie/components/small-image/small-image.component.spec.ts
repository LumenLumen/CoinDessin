import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallImageComponent } from './small-image.component';

describe('SmallImageComponent', () => {
  let component: SmallImageComponent;
  let fixture: ComponentFixture<SmallImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
