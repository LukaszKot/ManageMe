import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFeaturePageComponent } from './display-feature-page.component';

describe('DisplayFeaturePageComponent', () => {
  let component: DisplayFeaturePageComponent;
  let fixture: ComponentFixture<DisplayFeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFeaturePageComponent]
    });
    fixture = TestBed.createComponent(DisplayFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
