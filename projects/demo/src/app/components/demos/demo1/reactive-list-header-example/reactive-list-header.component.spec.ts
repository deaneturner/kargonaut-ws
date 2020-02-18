import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListHeaderComponent } from './reactive-list-header.component';
import { InlineGridDirective } from '../../../../../../../cargo-domain/src/kn/directives/inline-grid/inline-grid.directive';
import { PackageConfig } from '../../../../../../../cargo-domain/src/kn/models/Package.config';
import { Injector } from '@angular/core';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';

describe('ReactiveListHeaderComponent', () => {
    let component: ReactiveListHeaderComponent;
    let fixture: ComponentFixture<ReactiveListHeaderComponent>;
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
                ReactiveListHeaderComponent,
                InlineGridDirective,
                PackageComponent
            ],
            providers: [
                Injector
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveListHeaderComponent);
        component = fixture.componentInstance;
        component.config = mockConfig;
        component.parentComponent = null;
        fixture.detectChanges();
    });

    // TODO: mock injector
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
