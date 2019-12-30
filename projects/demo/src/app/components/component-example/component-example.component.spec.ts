import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExampleComponent } from './component-example.component';
import { NgGistModule } from 'ng-gist';
import { PackageComponent } from '../../../../../cargo-domain/src/cn/components/package/package.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/cn/directives/inline-grid/inline-grid.directive';

describe('ComponentExampleComponent', () => {
  let component: ComponentExampleComponent;
  let fixture: ComponentFixture<ComponentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ComponentExampleComponent,
          PackageComponent,
          InlineGridDirective
      ],
      imports: [
        NgGistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
