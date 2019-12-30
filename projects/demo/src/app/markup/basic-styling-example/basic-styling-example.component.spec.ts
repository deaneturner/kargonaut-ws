import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStylingExampleComponent } from './basic-styling-example.component';
import { NgGistModule } from 'ng-gist';

describe('DirectivesExampleComponent', () => {
  let component: BasicStylingExampleComponent;
  let fixture: ComponentFixture<BasicStylingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStylingExampleComponent ],
      imports: [
        NgGistModule
      ]
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
