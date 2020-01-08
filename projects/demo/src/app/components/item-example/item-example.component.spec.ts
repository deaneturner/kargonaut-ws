import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExampleComponent } from './item-example.component';

describe('ItemExampleComponent', () => {
  let component: ItemExampleComponent;
  let fixture: ComponentFixture<ItemExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
