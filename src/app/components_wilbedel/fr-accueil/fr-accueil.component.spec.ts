import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrAccueilComponent } from './fr-accueil.component';

describe('FrAccueilComponent', () => {
  let component: FrAccueilComponent;
  let fixture: ComponentFixture<FrAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
