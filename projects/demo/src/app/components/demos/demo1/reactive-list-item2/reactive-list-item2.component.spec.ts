import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveListItem2Component } from './reactive-list-item2.component';
import { InlineGridDirective } from '../../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';

describe('ReactiveListItem2Component', () => {
  let component: ReactiveListItem2Component;
  let fixture: ComponentFixture<ReactiveListItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReactiveListItem2Component,
        InlineGridDirective
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveListItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: mock injector
  // it('should create', () => {
  //     expect(component).toBeTruthy();
  // });
});
