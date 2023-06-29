import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeaturePageComponent } from './edit-feature-page.component';

describe('EditFeaturePageComponent', () => {
  let component: EditFeaturePageComponent;
  let fixture: ComponentFixture<EditFeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFeaturePageComponent]
    });
    fixture = TestBed.createComponent(EditFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
