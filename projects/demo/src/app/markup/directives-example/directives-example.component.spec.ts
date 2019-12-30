import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExampleComponent } from './directives-example.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/cn/directives/inline-grid.directive';
import { NgGistModule } from 'ng-gist';

describe('DirectivesExampleComponent', () => {
  let component: DirectivesExampleComponent;
  let fixture: ComponentFixture<DirectivesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          DirectivesExampleComponent,
          InlineGridDirective
      ],
      imports: [
        NgGistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
