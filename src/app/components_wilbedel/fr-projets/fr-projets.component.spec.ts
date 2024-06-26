import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrProjetsComponent } from './fr-projets.component';

describe('FrProjetsComponent', () => {
  let component: FrProjetsComponent;
  let fixture: ComponentFixture<FrProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrProjetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
