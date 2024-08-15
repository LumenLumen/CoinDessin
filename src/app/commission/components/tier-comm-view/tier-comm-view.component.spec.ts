import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierCommViewComponent } from './tier-comm-view.component';

describe('TierCommViewComponent', () => {
  let component: TierCommViewComponent;
  let fixture: ComponentFixture<TierCommViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierCommViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierCommViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
