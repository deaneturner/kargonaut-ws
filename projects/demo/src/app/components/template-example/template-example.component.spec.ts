import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExampleComponent } from './template-example.component';
import { PackageComponent } from '../../../../../cargo-domain/src/cn/components/package/package.component';
import { InlineGridDirective } from '../../../../../cargo-domain/src/cn/directives/inline-grid/inline-grid.directive';
import { NgGistModule } from 'ng-gist';

describe('TemplateExampleComponent', () => {
    let component: TemplateExampleComponent;
    let fixture: ComponentFixture<TemplateExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TemplateExampleComponent,
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
        fixture = TestBed.createComponent(TemplateExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO: mock store observable
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
