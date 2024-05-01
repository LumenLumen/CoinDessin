import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagebuttonComponent } from './languagebutton.component';

describe('LanguagebuttonComponent', () => {
  let component: LanguagebuttonComponent;
  let fixture: ComponentFixture<LanguagebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
