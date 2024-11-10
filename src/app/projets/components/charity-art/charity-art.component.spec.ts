import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityArtComponent } from './charity-art.component';

describe('CharityArtComponent', () => {
  let component: CharityArtComponent;
  let fixture: ComponentFixture<CharityArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharityArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharityArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
