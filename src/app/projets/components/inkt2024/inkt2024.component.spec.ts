import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inkt2024Component } from './inkt2024.component';

describe('Inkt2024Component', () => {
  let component: Inkt2024Component;
  let fixture: ComponentFixture<Inkt2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inkt2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inkt2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
