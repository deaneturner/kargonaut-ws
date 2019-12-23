import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMarkupExampleComponent } from './simple-markup-example.component';

describe('SimpleMarkupExampleComponent', () => {
  let component: SimpleMarkupExampleComponent;
  let fixture: ComponentFixture<SimpleMarkupExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMarkupExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMarkupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
