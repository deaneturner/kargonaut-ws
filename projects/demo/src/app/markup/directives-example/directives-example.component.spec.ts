import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExampleComponent } from './directives-example.component';
import { ItemDirective } from '../../../../../cargo-domain/src/cn/directives/item.directive';

describe('DirectivesExampleComponent', () => {
  let component: DirectivesExampleComponent;
  let fixture: ComponentFixture<DirectivesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          DirectivesExampleComponent,
          ItemDirective
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
