import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemExampleComponent } from './item-example.component';
import { of } from 'rxjs';
import { ItemConfig } from '../../../../../../../cargo-domain/src/kn/models/Item.config';
import { Item } from '../../../../../../../cargo-domain/src/kn/models/Item';
import { InlineGridDirective } from '../../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';

describe('ItemExampleComponent', () => {
    let component: ItemExampleComponent;
    let fixture: ComponentFixture<ItemExampleComponent>;
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
                ItemExampleComponent,
                InlineGridDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemExampleComponent);
        component = fixture.componentInstance;
        component.config = mockConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
