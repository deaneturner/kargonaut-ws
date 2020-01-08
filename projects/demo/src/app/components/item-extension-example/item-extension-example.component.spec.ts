import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExtensionExampleComponent } from './item-extension-example.component';
import { NgGistModule } from 'ng-gist';
import { PackageComponent } from '../../../../../cargo-domain/src/kn/components/package/package.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';
import { items } from '../../../assets/data/items';
import { of } from 'rxjs/internal/observable/of';

describe('ItemExtensionExampleComponent', () => {
  let component: ItemExtensionExampleComponent;
  let fixture: ComponentFixture<ItemExtensionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ItemExtensionExampleComponent,
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
    fixture = TestBed.createComponent(ItemExtensionExampleComponent);
    component = fixture.componentInstance;
    component.items$ = of(items);
    fixture.detectChanges();
  });

  // TODO: Mock store provider
  // it('should create', async(() => {
  //     expect(component).toBeTruthy();
  // }));
});
