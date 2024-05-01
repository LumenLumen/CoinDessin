import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrGalerieComponent } from './fr-galerie.component';

describe('FrGalerieComponent', () => {
  let component: FrGalerieComponent;
  let fixture: ComponentFixture<FrGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrGalerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
