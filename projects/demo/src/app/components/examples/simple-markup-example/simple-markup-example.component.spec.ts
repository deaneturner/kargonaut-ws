import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMarkupExampleComponent } from './simple-markup-example.component';
import { NgGistModule } from 'ng-gist';

describe('SimpleMarkupExampleComponent', () => {
    let component: SimpleMarkupExampleComponent;
    let fixture: ComponentFixture<SimpleMarkupExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SimpleMarkupExampleComponent
            ],
            imports: [
                NgGistModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleMarkupExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
