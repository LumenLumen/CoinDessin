import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnProjetsComponent } from './en-projets.component';

describe('EnProjetsComponent', () => {
  let component: EnProjetsComponent;
  let fixture: ComponentFixture<EnProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnProjetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
