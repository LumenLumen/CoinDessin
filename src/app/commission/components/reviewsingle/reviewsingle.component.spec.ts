import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsingleComponent } from './reviewsingle.component';

describe('ReviewsingleComponent', () => {
  let component: ReviewsingleComponent;
  let fixture: ComponentFixture<ReviewsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
