import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageComponent } from './package.component';
import { InlineGridDirective } from '../../directives/inline-grid/inline-grid.directive';
import { PackageConfig } from '../../../models/Package.config';
import { ItemConfig } from '../../../models/Item.config';

describe('PackageComponent', () => {
    let component: PackageComponent;
    let fixture: ComponentFixture<PackageComponent>;
    const mockConfig: PackageConfig = {
        cnLabel: 'test-label',
        cnLayout: {
            cnColumns: []
        }
    };
    const mockItemConfig: ItemConfig = {
        cnData: [],
        cnLayout: {
            cnColumns: [],
            cnTemplateRef: null
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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});