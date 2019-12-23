import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulationExampleComponent } from './emulation-example.component';

describe('EmulationExampleComponent', () => {
  let component: EmulationExampleComponent;
  let fixture: ComponentFixture<EmulationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
