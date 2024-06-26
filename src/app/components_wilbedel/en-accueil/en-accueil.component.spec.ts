import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAccueilComponent } from './en-accueil.component';

describe('EnAccueilComponent', () => {
  let component: EnAccueilComponent;
  let fixture: ComponentFixture<EnAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
