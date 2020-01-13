import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageMaterialComponent } from './package-material.component';
import { InlineGridDirective } from '../../directives/inline-grid/inline-grid.directive';
import { PackageConfig } from '../../models/Package.config';
import { ItemConfig } from '../../models/Item.config';
import { of } from 'rxjs';
import { Item } from '../../models/Item';

describe('PackageMaterialComponent', () => {
    let component: PackageMaterialComponent;
    let fixture: ComponentFixture<PackageMaterialComponent>;
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
                PackageMaterialComponent,
                InlineGridDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageMaterialComponent);
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
