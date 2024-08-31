import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtlistComponent } from './artlist.component';

describe('ArtlistComponent', () => {
  let component: ArtlistComponent;
  let fixture: ComponentFixture<ArtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
