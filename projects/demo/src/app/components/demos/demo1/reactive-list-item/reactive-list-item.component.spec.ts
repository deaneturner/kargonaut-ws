import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveListItemComponent } from './reactive-list-item.component';
import { InlineGridDirective } from '../../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';

describe('ReactiveListItemComponent', () => {
    let component: ReactiveListItemComponent;
    let fixture: ComponentFixture<ReactiveListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReactiveListItemComponent,
                InlineGridDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO: mock injector
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
