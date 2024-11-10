import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeArtComponent } from './free-art.component';

describe('FreeArtComponent', () => {
  let component: FreeArtComponent;
  let fixture: ComponentFixture<FreeArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
