import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeaturePageComponent } from './add-feature-page.component';

describe('AddFeaturePageComponent', () => {
  let component: AddFeaturePageComponent;
  let fixture: ComponentFixture<AddFeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFeaturePageComponent]
    });
    fixture = TestBed.createComponent(AddFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
