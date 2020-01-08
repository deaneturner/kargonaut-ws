import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExampleComponent } from './component-example.component';
import { NgGistModule } from 'ng-gist';
import { PackageComponent } from '../../../../../cargo-domain/src/kn/components/package/package.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';
import { items } from '../../../assets/data/items';
import { of } from 'rxjs/internal/observable/of';

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
    component.items$ = of(items);
    fixture.detectChanges();
  });

  // TODO: Mock store provider
  // it('should create', async(() => {
  //     expect(component).toBeTruthy();
  // }));
});
