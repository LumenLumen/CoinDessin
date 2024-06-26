import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSingleComponent } from './art-single.component';

describe('ArtSingleComponent', () => {
  let component: ArtSingleComponent;
  let fixture: ComponentFixture<ArtSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
