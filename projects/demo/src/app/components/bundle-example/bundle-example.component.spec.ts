import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleExampleComponent } from './bundle-example.component';

describe('BundleExampleComponent', () => {
  let component: BundleExampleComponent;
  let fixture: ComponentFixture<BundleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
