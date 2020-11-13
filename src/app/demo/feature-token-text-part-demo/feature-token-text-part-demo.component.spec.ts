import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureTokenTextPartDemoComponent } from './feature-token-text-part-demo.component';

describe('FeatureTokenTextPartDemoComponent', () => {
  let component: FeatureTokenTextPartDemoComponent;
  let fixture: ComponentFixture<FeatureTokenTextPartDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTokenTextPartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTokenTextPartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
