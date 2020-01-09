import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHeaderExampleComponent } from './package-header-example.component';

describe('PackageExampleComponent', () => {
  let component: PackageHeaderExampleComponent;
  let fixture: ComponentFixture<PackageHeaderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageHeaderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
