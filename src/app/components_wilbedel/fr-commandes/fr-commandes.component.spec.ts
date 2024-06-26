import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrCommandesComponent } from './fr-commandes.component';

describe('FrCommandesComponent', () => {
  let component: FrCommandesComponent;
  let fixture: ComponentFixture<FrCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrCommandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
