import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveListItemComponent } from './reactive-list-item.component';
import { of } from 'rxjs';
import { ItemConfig } from '../../../../../../../cargo-domain/src/kn/models/Item.config';
import { Item } from '../../../../../../../cargo-domain/src/kn/models/Item';
import { InlineGridDirective } from '../../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';

describe('ReactiveListItemComponent', () => {
    let component: ReactiveListItemComponent;
    let fixture: ComponentFixture<ReactiveListItemComponent>;
    const mockConfig: ItemConfig = {
        knData: of<Item[]>([]),
        knLayout: {
            knColumns: [],
            knTemplateRef: null
        }
    };

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
        component.config = mockConfig;
        fixture.detectChanges();
    });

    // TODO: mock injector
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
