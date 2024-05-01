import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGalerieComponent } from './en-galerie.component';

describe('EnGalerieComponent', () => {
  let component: EnGalerieComponent;
  let fixture: ComponentFixture<EnGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnGalerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
