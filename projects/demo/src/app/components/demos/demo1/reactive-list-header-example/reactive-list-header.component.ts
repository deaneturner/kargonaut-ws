import { Component, Injector, Input, OnInit } from '@angular/core';
import { PackageConfig } from '../../../../../../../cargo-domain/src/kn/models/Package.config';
import { PackageComponent } from '../../../../../../../cargo-domain/src/kn/components/package/package.component';

@Component({
    selector: 'demo-reactive-list-header',
    templateUrl: './reactive-list-header.component.html',
    styleUrls: ['./reactive-list-header.component.scss']
})
export class ReactiveListHeaderComponent implements OnInit {

    @Input()
    label: string;

    @Input()
    layout: any;

    @Input()
    data: any;

    @Input()
    config: PackageConfig;

    parentComponent: PackageComponent;

    constructor(private injector: Injector) {
        this.parentComponent = this.injector.get(PackageComponent);
    }

    ngOnInit() {
    }
}
