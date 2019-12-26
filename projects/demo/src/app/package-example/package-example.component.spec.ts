import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageExampleComponent } from './package-example.component';
import { PackageComponent } from '../../../../cargo-domain/src/cn/components/package/package.component';

describe('PackageExampleComponent', () => {
  let component: PackageExampleComponent;
  let fixture: ComponentFixture<PackageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          PackageExampleComponent,
          PackageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
