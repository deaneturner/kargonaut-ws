import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageExampleComponent } from './package-example.component';
import { PackageComponent } from '../../../../../cargo-domain/src/cn/components/package/package.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/cn/directives/inline-grid.directive';
import { NgGistModule } from 'ng-gist';

describe('PackageExampleComponent', () => {
    let component: PackageExampleComponent;
    let fixture: ComponentFixture<PackageExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PackageExampleComponent,
                PackageComponent,
                InlineGridDirective
            ],
            imports: [
                NgGistModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
