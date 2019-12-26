import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExampleComponent } from './directives-example.component';
import { CompositeLineDirective } from '../../../../../cargo-domain/src/cn/directives/composite-line.directive';

describe('DirectivesExampleComponent', () => {
  let component: DirectivesExampleComponent;
  let fixture: ComponentFixture<DirectivesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          DirectivesExampleComponent,
          CompositeLineDirective
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
