import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCommandesComponent } from './en-commandes.component';

describe('EnCommandesComponent', () => {
  let component: EnCommandesComponent;
  let fixture: ComponentFixture<EnCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnCommandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
