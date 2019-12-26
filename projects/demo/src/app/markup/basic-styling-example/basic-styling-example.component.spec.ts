import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStylingExampleComponent } from './basic-styling-example.component';

describe('BasicStylingExampleComponent', () => {
  let component: BasicStylingExampleComponent;
  let fixture: ComponentFixture<BasicStylingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStylingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStylingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
