import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageComponent } from './package.component';
import { InlineGridDirective } from '../../directives/inline-grid/inline-grid.directive';
import { PackageConfig } from '../../models/Package.config';
import { ItemConfig } from '../../models/Item.config';
import { of } from 'rxjs';
import { Item } from '../../models/Item';

describe('PackageComponent', () => {
    let component: PackageComponent;
    let fixture: ComponentFixture<PackageComponent>;
    const mockConfig: PackageConfig = {
        knLabel: 'test-label',
        knLayout: {
            knColumns: [],
            knMaxCollapse: 0
        }
    };
    const mockItemConfig: ItemConfig = {
        knData: of<Item[]>([]),
        knLayout: {
            knColumns: [],
            knTemplateRef: null
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PackageComponent,
                InlineGridDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageComponent);
        component = fixture.componentInstance;
        component.config = mockConfig;
        component.itemConfig = mockItemConfig;
        fixture.detectChanges();
    });

    // TODO: Complete for async pipe
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
