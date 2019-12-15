import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDomainComponent } from './cargo-domain.component';

describe('CargoDomainComponent', () => {
  let component: CargoDomainComponent;
  let fixture: ComponentFixture<CargoDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
