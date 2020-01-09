import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHeaderComponent } from './package-header.component';
import { InlineGridDirective } from '../../../directives/inline-grid/inline-grid.directive';
import { PackageConfig } from '../../../models/Package.config';

describe('PackageHeaderComponent', () => {
    let component: PackageHeaderComponent;
    let fixture: ComponentFixture<PackageHeaderComponent>;
    const mockConfig: PackageConfig = {
        knLabel: 'test-label',
        knLayout: {
            knColumns: [],
            knMaxCollapse: 0
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PackageHeaderComponent,
                InlineGridDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageHeaderComponent);
        component = fixture.componentInstance;
        component.config = mockConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
