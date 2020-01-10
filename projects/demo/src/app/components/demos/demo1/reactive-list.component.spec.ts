import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveListDemoComponent } from './reactive-list-demo.component';
import { NgGistModule } from 'ng-gist';
import { of } from 'rxjs/internal/observable/of';
import { PackageComponent } from '../../../../../../cargo-domain/src/kn/components/package/package.component';
import { InlineGridDirective } from '../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';
import { items } from '../../../../assets/data/items';
import { ReactiveListHeaderComponent } from './reactive-list-header-example/reactive-list-header.component';

describe('ReactiveListDemoComponent', () => {
  let component: ReactiveListDemoComponent;
  let fixture: ComponentFixture<ReactiveListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ReactiveListDemoComponent,
          PackageComponent,
          ReactiveListHeaderComponent,
          InlineGridDirective
      ],
      imports: [
        NgGistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveListDemoComponent);
    component = fixture.componentInstance;
    component.items$ = of(items);
    fixture.detectChanges();
  });

  // TODO: Mock store provider
  // it('should create', async(() => {
  //     expect(component).toBeTruthy();
  // }));
});
