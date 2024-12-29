import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalecemberComponent } from './talecember.component';

describe('TalecemberComponent', () => {
  let component: TalecemberComponent;
  let fixture: ComponentFixture<TalecemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalecemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalecemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
